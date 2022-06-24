import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import Geocoder from "react-native-geocoding";


Geocoder.init(""); //mettre son api key ici (pas compris comment faire un .env en RN)

const CreateMarkerPage = () => {
    const [adress, setAdress] = useState("");
    const [description, setDescription] = useState("");
    const [enable, setEnable] = useState("cafe");

    const sendDataMarker = () => {
        if (adress.length === 0 || description.length === 0) {
            Alert.alert("a required field is empty")
        } else
        Alert.alert("Your marker has just been added to the map!")
        console.log("data Marker",adress,description,enable);
        Geocoder.from(`${adress}`)
		.then(json => {
			let location = json.results[0].geometry.location;
			console.log("testttt",location);
		})
		.catch(error => console.warn(error));
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logoW2W} source={require('./assets/where2work.png')} />
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
                    <Picker
                        selectedValue={enable}
                        style={{ height: 50, width: 250 }}
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
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            </View>
        </>
    )
}


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
        marginBottom: 30,
        alignItems: "center",
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1098F7",
        display: "flex",
        flexDirection: "row"

    },
    loginText: {
        color: "#fff",
        fontSize: 20,
    },
});

export default CreateMarkerPage;