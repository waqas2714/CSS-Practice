import React from "react";
import "./App.css";
import BigContainer from "./components/BigContainer";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";

const App = () => {
  return (
    <div className="container">
      <BigContainer />
      <div className="small-container">
        <div className="row" id="upper-container">
          <FirstComponent />
          <SecondComponent />
        </div>
        <div id="lower-container" className="row">
          <ThirdComponent />
          <FourthComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
