import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Callout from "react-native-maps";
import axios from "axios";
import { FontAwesome } from '@expo/vector-icons';

const Map = () => {
  const [data, setData] = useState([]);

  const ASPECT_RATIO =
    Dimensions.get("window").width / Dimensions.get("window").height;
  const LATITUDE_DELTA = 0.3;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const path = "http://192.168.1.97:3000/spots";
  useEffect(() => {
    axios
      .get(path)
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  }, []);

  const pinColor = '#1098F7';

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.856614,
            longitude: 2.3522219,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {data.map((marker) => (
            <MapView.Marker
              pinColor={pinColor}
              style={styles.marker}
              key={marker._id}
              coordinate={{ latitude : marker.lat , longitude : marker.lng }}
              title={marker.name}
              description={marker.description}
            >
              <Callout>
                <View style={styles.map_view}>
                  <Text>{marker.name}</Text>
                </View>
              </Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 100,
  },
  marker: {
    position: "absolute",
  },
  map_view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Map;