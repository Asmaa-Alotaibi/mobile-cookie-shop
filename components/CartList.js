import { observer } from "mobx-react";
import { List } from "native-base";
import React from "react";
import cartStore from "../stores/cartStore";
import itemStore from "../stores/itemStore";
import { CheckoutButton, CheckoutButtonText } from "../styles";
import CartItem from "./CartItem";

const CartList = () => {
  if (itemStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...itemStore.getItemById(item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
