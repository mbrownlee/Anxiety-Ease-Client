import React, { useEffect, useState } from "react";
import ActivityDetailCard from "./activityDetailCard";
import useSimpleAuth from "../../hooks/useSimpleAuth";
// import "./ActivityDetailList.css";

const ActivityDetailList = (props) => {
  
  const [activityDetails, setActivityDetails] = useState([]);
  const [activityType, setActivityType] = useState({
    name: "",
  });
  const { isAuthenticated } = useSimpleAuth();

  const getActivityDetails = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/activitydetail", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem(
            "anxiety_ease_token"
          )}`,
        },
      })
        .then((res) => res.json())
        .then((activityDetails) => {
          setActivityType(activityDetails.activitytype);
          setActivityDetails(activityDetails)
        });
    }
  };
 

  useEffect(() => {
    getActivityDetails();
  }, []);

  return (
    <div className="activityDetailList">
      {activityDetails.map((activityDetail) => {
       return <ActivityDetailCard key={`activityDetail-${activityDetail.id}`} activityDetail={activityDetail} />
      })}
    </div>
  );
};

export default ActivityDetailList;