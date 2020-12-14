import React from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";
import itemStore from "../stores/itemStore";
import bakeryStore from "../stores/BakeryStore";
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from "../styles";

const BakeryDetail = () => {
  const bakery = bakeryStore.bakeries[0];

  const cakesFromItemStore = bakery.items.map((e) =>
    itemStore.getItemById(e.id)
  );
  if (bakeryStore.loading) return <Spinner />;

  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <ItemList items={cakesFromItemStore} />
    </>
  );
};

export default observer(BakeryDetail);
