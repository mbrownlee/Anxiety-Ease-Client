import React, { useEffect, useState, useRef } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const FiveFourThreeContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([
    { resource: "" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newDetail, setNewDetail] = useState({});
  const { isAuthenticated } = useSimpleAuth();

  const finishDialog = useRef(null);

  const getFiveFourThreeCards = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/staticactivityresource?activitytypeid=2", {
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
    getFiveFourThreeCards();
  }, []);

  useEffect(() => {
    let timeout;
    if (currentIndex < staticActivityResources.length - 1) {
      timeout = setTimeout(() => setCurrentIndex(currentIndex + 1), 6000);
    }
    return () => clearTimeout(timeout);
  }, [staticActivityResources, currentIndex]);

  const constructNewActivityDetail = (evt) => {
    evt.preventDefault();
    const theActivityDetail = {
      activity_type_id: 2,
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
      .then((newDetail) => {
        setNewDetail(newDetail);
        finishDialog.current.showModal();
      });
  };

  return (
    <>
      <dialog className="dialog" ref={finishDialog}>
        <div>Would you like to rate and make a note now?</div>
        <button
          className="button--close"
          onClick={(e) =>
            props.history.push(`/activitydetail/edit/${newDetail.id}`)
          }
        >
          Yes
        </button>
        <button
          className="button--close"
          onClick={(e) => props.history.push("/activities")}
        >
          Later
        </button>
      </dialog>
      <div className="resourceCard">
        <div className="resourceCard-content">
          <div>
            <h3>
              Out loud or in your head, answer each prompt. Notice what is
              around you.
            </h3>
            <div className="5-4-3-2-1">
              {staticActivityResources[currentIndex].resource}
            </div>
            <button type="button" onClick={constructNewActivityDetail}>
              {" "}
              Finish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveFourThreeContainer;
