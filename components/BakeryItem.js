import { ListItem } from "native-base";
import React from "react";
import { Image } from "react-native";
import { BakeryItemStyled } from "../styles";

const BakeryItem = ({ bakery, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("BakeryDetail", { bakery: bakery })}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: bakery.image }} //image.replace("localhost", "192.168.0.153")
      />
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  );
};
export default BakeryItem;
