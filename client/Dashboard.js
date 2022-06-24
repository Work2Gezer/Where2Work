import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import axios from "axios";
import Footer from "./Footer";
import { Callout } from "react-native-maps";


const Dashboard = ({ navigation: { navigate } }) => {
  const Map = () => {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);

    let text = "Waiting...";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
    let getLatitude = location?.coords?.latitude;
    let getLongitude = location?.coords?.longitude;

    const ASPECT_RATIO =
      Dimensions.get("window").width / Dimensions.get("window").height;
    const LATITUDE_DELTA = 0.2;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const path = "http://192.168.1.97:3000/spots";
    useEffect(() => {
      axios
        .get(path)
        .then((response) => {
          setData(response.data);
          console.log(response.data[0]);
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
            error.message
          );
          // ADD THIS THROW error
          throw error;
        });
    }, []);

    let typeColor = "#1098F7"

    function findColor(type) {
      if (type === "cafe") {
        return "#462e01"
      } else if (type === "parc") {
        return "#006f43"
      } else if (type === "bibliotheque") {
        return "#1098F7"
      }
    }

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: getLatitude,
            longitude: getLongitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {data.map((marker) => (
            <MapView.Marker
              key={marker._id}
              coordinate={{ latitude: marker.lat, longitude: marker.lng }}
              pinColor={findColor(marker.type)}
            >
              <Callout style={styles.callout_style}>
                <View style={styles.map_view}>
                  <Text>{marker.name}</Text>
                  <Text>{marker.adress}</Text>
                  <Text>{marker.type}</Text>
                  <Text>{marker.wifi}</Text>
                  <Text>{marker.rating}</Text>
                  <Text>{marker.tel}</Text>
                  <Text>{marker.description}</Text>
                </View>
              </Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Map />
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
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
    backgroundColor: "blue",
  },
  map_view: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  callout_style: {
    height: 200,
    width: 200,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
});

export default Dashboard;
