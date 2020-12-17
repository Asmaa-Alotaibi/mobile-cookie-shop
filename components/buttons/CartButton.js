import React from "react";
import { CartButtonStyled, CartTextStyled } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Button } from "native-base";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { Alert } from "react-native";

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button transparent light onPress={handlePress}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};

export default observer(CartButton);
