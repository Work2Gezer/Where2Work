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



const SignInPage = ({ navigation: { navigate } }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("")

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const sendDataLogin = () => {
        console.log("input email : ", email);
        console.log("input password : ", password);
        console.log("input Confirm password : ", confirmPassword);

        if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            Alert.alert("a required field is empty")
        } else if (password !== confirmPassword) {
            Alert.alert("Confirm password is different")
        } else if (!isValidEmail(email)) {
            Alert.alert("Email is not valid")
        } else {

            Alert.alert("Sign In successful")

            const path = "http://192.168.1.97:3000/users/signup";
            axios.post(path, {
                email: email,
                password: password
            })
                .then(function (response) {
                    console.log("Sucess :");
                    setLoginStatus("Sucess")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
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

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder=" Confirm Password"
                    placeholderTextColor="#fff"
                    color="#fff"
                    secureTextEntry={true}
                    onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={sendDataLogin}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigate('LogInPage')}>
                <Ionicons style={styles.icon} name="arrow-back" size={30}></Ionicons>
                <Text style={styles.loginText}>Return To Login Page</Text>
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
        marginTop: 10,
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

export default SignInPage;