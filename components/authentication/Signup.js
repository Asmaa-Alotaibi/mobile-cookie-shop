import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";
import {
  AuthContainer,
  AuthTitle,
  AuthButton,
  AuthOther,
  AuthButtonText,
  AuthTextInput,
} from "../../styles";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    console.log("TCL: handleSubmit -> user", user);
    await authStore.signup(user);
    if (authStore.user) navigation.navigate("BakeryList");
  };
  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
      />

      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="FirstName"
        placeholderTextColor="#A6AEC1"
      />

      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="LastName"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
      />

      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to login!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
