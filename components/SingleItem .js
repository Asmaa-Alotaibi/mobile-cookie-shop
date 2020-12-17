import { ListItem, Left, Right, Button, Text, Body } from "native-base";
import React, { useState } from "react";
import { Image } from "react-native";
import { BakeryItemStyled } from "../styles";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";
import cartStore from "../stores/cartStore";

const SingleItem = ({ cake }) => {
  const handleAdd = () => {
    const newItem = { quantity, itemId: cake.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };
  const [quantity, setQuantity] = useState(1);
  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: cake.image.replace("localhost", "192.168.0.153") }}
        />
        <BakeryItemStyled>{cake.name}</BakeryItemStyled>
      </Left>

      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(SingleItem);
