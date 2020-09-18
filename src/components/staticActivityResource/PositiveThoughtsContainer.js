import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";
import ActivityDetailForm from "../activityDetail/activityDetailForm"
// import NewActivityDetailButton from "../activityDetail/newActivityDetailInstance";

const PositiveThoughtsContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([
    { resource: "" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAuthenticated } = useSimpleAuth();

  const getPositiveThoughtsCards = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/staticactivityresource?activitytypeid=3", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("anxiety_ease_token")}`,
        },
      })
        .then((res) => res.json())
        .then(setStaticActivityResources);
    }
  };

  useEffect(() => {
    getPositiveThoughtsCards();
    
  }, []);

  useEffect(() => {
      let timeout
      if (currentIndex < staticActivityResources.length -1) {
          timeout = setTimeout(() => setCurrentIndex(currentIndex +1), 2000)
      } else if (currentIndex !== 0){
          setCurrentIndex(0) }
      return () => clearTimeout(timeout)
  }, [staticActivityResources, currentIndex]);

  const constructNewActivityDetail = (evt) => {
    evt.preventDefault();
      const theActivityDetail = {
        rating: "",
        note: "",
        // activity_type_id: parseInt(activityDetail.activity_type_id),
      };
      fetch("http://localhost:8000/activitydetail", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Token ${localStorage.getItem("anxiety_ease_token")}`,
            },
            body: JSON.stringify(theActivityDetail),
        })
        .then((response) => response.json())
        .then(() => {
            console.log("Added");
            props.history.push("/activities");
        });
    }


    return (
        <div className="resourceCard">
        <div className="resourceCard-content">
            <div>
            <h3>
                Out loud or in your head, read each fact and try to believe it.
            </h3>
            <div className="positiveThoughts">{staticActivityResources[currentIndex].resource}</div>
            {/* <button>Finished</button> */}
            {/* <NewActivityDetailButton /> */}
            <button type="button" onClick={constructNewActivityDetail}> Finish</button>
            </div>
        </div>
        </div>
    );
};

export default PositiveThoughtsContainer;
