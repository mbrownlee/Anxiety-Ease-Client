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
      fetch("http://localhost:8000/activitylist/", {
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
          setActivityDetails(activityDetails.results)
          console.log(activityDetails.count, activityDetails.next, activityDetails.previous)
        });
    }
  };
 

  useEffect(() => {
    getActivityDetails();
  }, []);

  return (
    <>
    <h2>Welcome</h2>
    <p>Here are your 5 most recent calming activities.</p>
    <p>You can view the details and edit to make notes (what triggered your anxiety, thoughts, feelings, etc) and rate effectiveness for your own reference. Or you can delete the activity.</p>
    <div className="activityDetailList">
      {activityDetails.map((activityDetail) => {
       return <ActivityDetailCard key={`activityDetail-${activityDetail.id}`} activityDetail={activityDetail} />
      })}
    </div>
    </>
  );
};

export default ActivityDetailList;