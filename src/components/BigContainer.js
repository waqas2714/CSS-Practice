import React from "react";

const BigContainer = ({compress}) => {

  return (
    <div className={compress ? 'none' :  "big-container"} >
      <div className="upper">
        <h1 style={{ display: "inline-block" }}>Category.</h1>
        <p style={{ display: "inline-block", marginLeft: "5px" }}>Fitness</p>
      </div>
      <div className="lower">
        <h1>BEST FULL-BODY HOME GYM MACHINES</h1>
      </div>
    </div>
  );
};

export default BigContainer;
