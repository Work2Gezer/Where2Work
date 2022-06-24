import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Geocoder from "react-native-geocoding";
import axios from "axios";

Geocoder.init(""); //mettre son api key ici (pas compris comment faire un .env en RN)

const CreateMarkerPage = () => {
  const [adress, setAdress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [enable, setEnable] = useState("cafe");

  const sendDataMarker = () => {
    if (adress.length === 0 || description.length === 0) {
      Alert.alert("a required field is empty");
    } else Alert.alert("Your marker has just been added to the map!");
    console.log("data Marker", adress, description, enable);

    
    Geocoder.init("AIzaSyCd3XKA0tfKWkWVXmdIeYZCBHovy8Drr24");
    
    Geocoder.from(`${adress}`)
    .then((json) => {
        let location = json.results[0].geometry.location;
        console.log("testttt", location);
        axios
          .post("http://192.168.188.242:3000/spots/add", {
            adress: adress,
            name: name,
            description: description,
            type: enable,
            lat: location.lat,
            lng: location.lng
          })
          .then(function (response) {
            console.log("Sucess", response);
            setLoginStatus("Sucess");
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logoW2W}
          source={require("./assets/where2work.png")}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Type an adress"
            placeholderTextColor="#fff"
            color="#fff"
            onChangeText={(adress) => setAdress(adress)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Spot name"
            placeholderTextColor="#fff"
            color="#fff"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <Picker
            selectedValue={enable}
            style={{ height: 50, width: 250, color: "#fff" }}
            mode={"dialog"}
            onValueChange={(itemValue) => setEnable(itemValue)}
          >
            <Picker.Item label="Cafe" value="Cafe" />
            <Picker.Item label="Parc" value="Parc" />
            <Picker.Item label="Bibliotheque" value="Bibliotheque" />
          </Picker>
        </View>
        <View style={styles.TextAreaView}>
          <TextInput
            numberOfLines={5}
            multiline={true}
            placeholder="Description"
            placeholderTextColor="#fff"
            color="#fff"
            onChangeText={(description) => setDescription(description)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={sendDataMarker}>
          <Text style={styles.loginText}>ADD SPOT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1098F7",
    alignItems: "center",
    justifyContent: "center",
  },
  logoW2W: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#DECCCC",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  TextAreaView: {
    height: 150,
    justifyContent: "flex-start",
    backgroundColor: "#DECCCC",
    borderRadius: 30,
    width: "70%",
    marginBottom: 10,
    alignItems: "center",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
  },
  loginText: {
    color: "#1098F7",
    fontSize: 20,
  },
});

export default CreateMarkerPage;
