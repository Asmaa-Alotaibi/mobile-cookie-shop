import { ListItem } from "native-base";
import React from "react";
import { Image } from "react-native";
import { BakeryItemStyled } from "../styles";

const BakeryItem = ({ bakery }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: bakery.image }}
      />
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  );
};
export default BakeryItem;
