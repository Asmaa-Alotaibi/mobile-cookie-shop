import { observer } from "mobx-react";
import React, { useState } from "react";
import authStore from "../../stores/authStore";

import {
  AuthContainer,
  AuthTitle,
  AuthButton,
  AuthOther,
  AuthButtonText,
  AuthTextInput,
} from "../../styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    console.log("TCL: handleSubmit -> user", user);
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Home");
    if (authStore.user) navigation.navigate("BakeryList");
  };
  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
