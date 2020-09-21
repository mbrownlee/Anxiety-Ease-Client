import React from "react";
import { Link } from "react-router-dom";
import "./activityType.css"

const ActivityTypeCard = (props) => {
  return (
    <div className="activityTypeCard">
      <div className="activityTypeCard-content">
        <div>
        {/* I want it to link to the resources associated with the activity type chosen */}
          <Link to={`/activities/${props.activityType.id}`}>
            {props.activityType.name}
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ActivityTypeCard;