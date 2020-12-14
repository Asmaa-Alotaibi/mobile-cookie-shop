import React from "react";
import { Image } from "react-native";
import { Image } from "react-native";
import { BakeryItemStyled } from "../styles";

const SingleItem = ({ cake }) => {
  return (
    <>
      <ListItem>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: cake.image }}
        />
        <BakeryItemStyled>{cake.name}</BakeryItemStyled>
      </ListItem>
    </>
  );
};

export default SingleItem;
