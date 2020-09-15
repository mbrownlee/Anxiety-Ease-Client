import React from "react";


const DeepBreathingCard = (props) => {
  return (
    <div className="activityTypeCard">
      <div className="activityTypeCard-content">
        <div>
            {props.staticActivityResource.resource}
          
        </div>
      </div>
    </div>
  );
};

export default DeepBreathingCard;