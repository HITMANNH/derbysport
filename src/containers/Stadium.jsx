import React from "react";
import Imgmban from "../img/imgmban";
import  "../App.css"
import StadiumCard from "../components/StadiumCard";

const Stadium = () => {
  return (
    <div>
      <Imgmban />
      <div className="stademban">
        <StadiumCard />
      </div>
    </div>
  );
};

export default Stadium;
