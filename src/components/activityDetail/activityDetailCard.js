import React from "react";
import { Link } from "react-router-dom";

const ActivityDetailCard = (props) => {
    // debugger;
  return (
    <div className="activitydetailCard">
      <div className="activitydetailCard-content">
        
        
          <Link to={`/activitydetail/${props.activityDetail.id}`}>
            {props.activityDetail.created_at}
          </Link>
          <div>
           
            {props.activityDetail.activity_type.name}
          
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailCard;
