import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActivityTypeCard from "./ActivityTypeCard";
import useSimpleAuth from "../../hooks/useSimpleAuth";
import "./activityType.css";

const ActivityTypeList = (props) => {
  const [activityTypes, setActivityTypes] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getActivityTypes = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/activitytype", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem(
            "anxiety_ease_token"
          )}`,
        },
      })
        .then((res) => res.json())
        .then(setActivityTypes);
    }
  };

  useEffect(() => 
  {
    getActivityTypes()
}, []);

  return (
   
    <div className="activityContainer">
      {activityTypes.map((activityType) => (
        <ActivityTypeCard key={`activityType-${activityType.id}`} activityType={activityType} />
      ))}
      <Link className= "statsTypeCard" to={"/mystats"}>My Stats</Link>
    </div>
     
  );
};

export default ActivityTypeList;