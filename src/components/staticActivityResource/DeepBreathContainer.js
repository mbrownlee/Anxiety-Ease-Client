import React, { useEffect, useState, useRef } from "react";
import DeepBreathTimer from "./DeepBreathTimer";
import useSimpleAuth from "../../hooks/useSimpleAuth";
import "./staticResource.css";

const DeepBreathContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([
    { resource: "" },
  ]);
  const [currentPrompt, setCurrentPrompt] = useState({ resource: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newDetail, setNewDetail] = useState({});
  const { isAuthenticated } = useSimpleAuth();

  const finishDialog = useRef(null);

  const getDeepBreathCards = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/staticactivityresource?activitytypeid=1", {
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
    getDeepBreathCards();
  }, []);

  useEffect(() => {
    setCurrentPrompt(staticActivityResources[0]);
  }, [staticActivityResources]);

  useEffect(() => {
    setCurrentPrompt(staticActivityResources[currentIndex]);
  }, [currentIndex]);

  const toggleIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(0);
    }
    return [true, 1000];
  };

  const constructNewActivityDetail = (evt) => {
    evt.preventDefault();
    const theActivityDetail = {
      activity_type_id: 1,
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
        <DeepBreathTimer toggleIndex={toggleIndex} />
        <div className="deepBreath">{currentPrompt.resource}</div>

      </div>
        <button type="button" className="breathButton" onClick={constructNewActivityDetail}>
          {" "}
          Finish
        </button>
    </>
  );
};

export default DeepBreathContainer;
