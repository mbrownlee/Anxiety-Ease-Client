import React from "react";
import { Link } from "react-router-dom";
import "./activityType.css";

const ActivityTypeCard = (props) => {
  return (
    <div className="activityTypeCard">
      <Link to={`/activities/${props.activityType.id}`}>
        <button className="activityTypeButton" type="button">{props.activityType.name} </button>
      </Link>
    </div>
  );
};

export default ActivityTypeCard;
