import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import ContainerStyle from "./components/styles/ContainerStyle";
import { ThemeProvider } from "styled-components";

const myStyles = {
  colors: {
    myLogo: "#DFF2F0",
    myHeader: "lightblue",
  },
  myResponsive: "991px",
};

const App = () => {
  return (
    <ThemeProvider theme={myStyles}>
      <ContainerStyle>
        <Header />
        <hr />
        <Card />
        <hr />
      </ContainerStyle>
    </ThemeProvider>
  );
};

export default App;
