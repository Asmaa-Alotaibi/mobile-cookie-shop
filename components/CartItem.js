import { Body, ListItem, Right } from "native-base";
import React from "react";
import { Text } from "react-native";
import cartStore from "../stores/cartStore";
import { TotalPrice, TrashIcon } from "../styles";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <TrashIcon
          name="trash"
          type="Ionicons"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
