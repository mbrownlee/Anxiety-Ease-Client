import React from "react";
import { Link } from "react-router-dom";

const ActivityDetailCard = (props) => {
  return (
    <div className="activitydetailCard">
      <div className="activitydetailCard-content">
        
        
          <Link to={`/activitydetail/${props.activityDetail.id}`}>
            {new Date(props.activityDetail.created_at).toLocaleDateString("en-US", {
                weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'
            })}
            {" "}
            {new Date(props.activityDetail.created_at).toLocaleTimeString("en-US", {
                hour: '2-digit', minute: '2-digit'
            })}
          </Link>
          <div>
           
            {props.activityDetail.activity_type.name}
          
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailCard;
