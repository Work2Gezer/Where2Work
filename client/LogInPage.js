import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";



const LogInPage = ({ navigation: { navigate } }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("")

    const sendDataLogin = () => {
        if (email.length === 0 || password.length === 0) {
            Alert.alert("a required field is empty")
        } else
            Alert.alert("Log In successful")
        const path = "http://192.168.1.97:3000/users/login";
        axios.post(path, {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log("Sucess", response);
                setLoginStatus("Sucess")
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <View style={styles.container}>
            <Image style={styles.logoW2W} source={require('./assets/where2work.png')} />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    color="#fff"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    color="#fff"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={sendDataLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigate('SigInInPage')}>
                <Text style={styles.loginText}>SIGN UP</Text>
                <Ionicons style={styles.icon} name="arrow-forward" size={30}></Ionicons>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    logoW2W: {
        height: 200,
        width: 200,
        marginBottom: 20,
    },

    inputView: {
        backgroundColor: "#DECCCC",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#1098F7",
        textDecorationLine: "underline"
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
        color: "#fff"
    },
    icon: {
        color: "#fff"
    }
});

export default LogInPage;