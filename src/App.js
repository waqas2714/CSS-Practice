import React, { useState } from "react";
import "./App.css";
import BigContainer from "./components/BigContainer";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";

const App = () => {
  const [compress1, setCompress1] = useState(true);
  const [compress2, setCompress2] = useState(true);
  const [compress3, setCompress3] = useState(true);
  const [compress4, setCompress4] = useState(true);
  const [compress5, setCompress5] = useState(true);

  return (
    <div className="container">
      <div
        className={compress1? `compressed` : `compressed no-bottom-radius`}
        onClick={() => {
          setCompress1(!compress1);
        }}
      >
        <p>Component Name</p>
      </div>
      <BigContainer compress={compress1} />
      <div className="small-container">
        <div className="row" id="upper-container">
          <div
            className={compress2? `compressed` : `compressed no-bottom-radius`}
            onClick={() => {
              setCompress2(!compress2);
            }}
            style={{width: "100%"}}
          >
            <p>Component Name</p>
          </div>
          <div className={compress2?'none':''} >
          <FirstComponent />
          </div>

          <div
            className={compress3? `compressed` : `compressed no-bottom-radius`}
            style={{width: "100%"}}
            onClick={() => {
              setCompress3(!compress3);
            }}
          >
            <p>Component Name</p>
          </div>
          <div className={compress3?'none':''}>
          <SecondComponent />
          </div>
        </div>
        <div id="lower-container" className="row">
          <div
            className={compress4? `compressed` : `compressed no-bottom-radius`}
            style={{width: "100%"}}
            onClick={() => {
              setCompress4(!compress4);
            }}
          >
            <p>Component Name</p>
          </div>
          <div className={compress4 ?'none' :''}>
            <ThirdComponent compress={compress4} />
          </div>

          <div
            className={compress5? `compressed` : `compressed no-bottom-radius`}
            style={{width: "100%"}}
            onClick={() => {
              setCompress5(!compress5);
            }}
          >
            <p>Component Name</p>
          </div>
          <div className={compress5?'none':'one'}>
            <FourthComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
