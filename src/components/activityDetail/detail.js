import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const TheDetail = (props) => {
  const [activityDetail, setActivityDetail] = useState({
    created_at: "",
    rating: "",
    note: "",
    activityTypeId: "",
  });
  const { isAuthenticated } = useSimpleAuth();
  const [activityType, setActivityType] = useState({
    name: "",
  });

  const getDetail = () => {
    if (isAuthenticated()) {
      fetch(
        `http://localhost:8000/activitydetail/${props.match.params.activityDetailId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem(
              "anxiety_ease_token"
            )}`,
          },
        }
      )
        .then((response) => response.json())
        .then((activityDetail) => {
          setActivityType(activityDetail.activitytype);
          setActivityDetail(activityDetail);
        });
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {/* if returned object is nested and you want to access, have to check that it is there and then if that evaulates to true, access the property of that nested object */}
      <h3>
        {activityDetail.activity_type && activityDetail.activity_type.name}
      </h3>
      <p>Date: {activityDetail.created_at} </p>
      <p>Rating: {activityDetail.rating}</p>
      <p>Notes: {activityDetail.note}</p>
      <button
        onClick={() => {
          props.history.push(`/activitydetail/edit/${activityDetail.id}`);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          fetch(`http://localhost:8000/activitydetail/${activityDetail.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${localStorage.getItem(
                "anxiety_ease_token"
              )}`,
            },
          }).then(() => {
            props.history.push("/mystats");
          });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default TheDetail;
