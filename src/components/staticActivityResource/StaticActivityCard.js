import React from "react";


const StaticActivityCard = (props) => {
  return (
    <div className="staticActivityCard">
      <div className="staticActivityCard-content">
        <div>
            {props.staticActivityResource.resource}
          
        </div>
      </div>
    </div>
  );
};

export default StaticActivityCard;