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
const Home = () => {
  return (
    <HomeBackground source={bgimage}>
      <OverLayContainer>
        <TopStyling>
          <Title> All About CheeseCake !</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled
            onPress={() => alert("Take me to the list of bakeries")}
          >
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
