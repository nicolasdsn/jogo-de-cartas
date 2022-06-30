import React from "react";
import { StatusBar } from "react-native";
import NickProvider from "./src/NickContext";
import Routes from "./src/Routes";


const App = () => {
  return (
    <>
      <NickProvider>
        <StatusBar />
        <Routes />
      </NickProvider>
    </>
  );
};

export default App;
