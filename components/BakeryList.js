import React from "react";
// Styles
import { observer } from "mobx-react";
import bakeryStore from "../stores/BakeryStore";
import BakeryItem from "./BakeryItem";
import { Content, List, Spinner } from "native-base";

const BakeryList = () => {
  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} />
  ));
  if (bakeryStore.loading) return <Spinner />;
  return (
    <Content>
      <List>{bakeryList}</List>
    </Content>
  );
};
export default observer(BakeryList);
