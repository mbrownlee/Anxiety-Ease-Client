import React from "react";
import { Link } from "react-router-dom";

const ActivityTypeCard = (props) => {
  return (
    <div className="activityTypeCard">
      <div className="activityTypeCard-content">
        <div>
          <Link to={`/activities/${props.activityType.id}`}>
            {props.activityType.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityTypeCard;