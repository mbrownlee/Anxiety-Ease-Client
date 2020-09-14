import React from "react";
import { Link } from "react-router-dom";

const StaticActivityResourceCard = (props) => {
  return (
    <div className="activityTypeCard">
      <div className="activityTypeCard-content">
        <div>
          <Link to={`/staticactivity/${props.staticActivityResource.id}`}>
            {props.staticActivityResource.resource}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaticActivityResourceCard;