import React from "react";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";

const FirstComponent = () => {
  return (
    <div id="one">
      <div className="arrow-and-text">
        <div className="text">
          <h4>Category. </h4>
          <p>Gym</p>
        </div>
        <div className="arrow">
          <BsArrowUpRight
            id="react-arrow"
            color="white"
            style={{ backgroundColor: "rgba(0,0,0,0)", marginTop: "10px" }}
            size={14}
          />
        </div>
      </div>
      <div className="heading">
        <h1>READY, SET, GO! HOW TO START RUNNING TO STAY FIT</h1>
      </div>
      <div className="caption">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fugit.
        Odit voluptatum cumque voluptas nostrum ducimus animi nisi reprehenderit
        Incidunt.
      </div>
      <hr />
      <div className="extra-info">
        <h1>HOW TO READ GOLF GREEN GRAIN LIKE A PRO</h1>
        <BsArrowRight id="react-arrow" />
      </div>
      <hr />
      <div className="extra-info">
        <h1>HOW TO WORKOUT IN A LIMITED SPACE</h1>
        <BsArrowRight id="react-arrow" />
      </div>
    </div>
  );
};

export default FirstComponent;
