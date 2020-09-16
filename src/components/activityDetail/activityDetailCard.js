import React from "react";
import { Link } from "react-router-dom";

const ActivityDetailCard = (props) => {
  return (
    <div className="activitydetailCard">
      <div className="activitydetailCard-content">
        <div>
          <Link to={`/activitydetails/${props.activitydetail.id}`}>

            {props.activityDetail.created_at}
          </Link>
          <div>
            {props.activityDetail.rating}
            {props.activityDetail.note}
            {props.activityType.name}
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default ActivityDetailCard;