import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FourthComponent = () => {
  return (
    <div id="four">
      <div className="features">
        <p className="feature">Medical Knowledge</p>
        <p className="feature">Body Building</p>
        <p className="feature">Food</p>
        <p className="feature">Sickness</p>
        <p className="feature">Life Style</p>
      </div>
      <div className="view-categories">
        <h4>View All Categories</h4>
        <BsArrowRight id="react-arrow" style={{ marginRight: "1rem" }} />
      </div>
    </div>
  );
};

export default FourthComponent;
