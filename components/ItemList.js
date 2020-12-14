import React from "react";
import { observer } from "mobx-react";
import SingleItem from "./SingleItem ";
import { Content, List } from "native-base";

const ItemList = () => {
  const itemList = items.map((e) => <SingleItem cake={e} key={e.id} />);
  return (
    <Content>
      <List>{itemList} </List>
    </Content>
  );
};

export default observer(ItemList);
