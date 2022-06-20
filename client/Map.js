import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";


const Map = ({ navigation: { navigate } }) => {

const [spots, setSpots] = useState()

const ASPECT_RATIO = Dimensions.get("window").width / Dimensions.get("window").height;
const LATITUDE_DELTA = 0.3;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

useEffect(() => {
console.log("hello")
fetch('http://127.0.0.1:3000/spots')
        .then((res) => console.log("RESPONSE :", res.json()));
},[])




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
        />
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
    height: Dimensions.get("window").height,
  },
});

export default Map;
