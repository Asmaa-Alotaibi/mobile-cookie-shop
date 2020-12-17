import React from "react";
import bgimage from "../Cheesecake.jpg";
// Styling
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "../styles";
const Home = ({ navigation }) => {
  return (
    <HomeBackground source={bgimage}>
      <OverLayContainer>
        <TopStyling>
          <Title> All About CheeseCake !</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("BakeryList")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
