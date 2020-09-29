import React, { useEffect, useState, useRef } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MuscleRelaxationContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([
    { resource: "" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newDetail, setNewDetail] = useState({});
  const { isAuthenticated } = useSimpleAuth();

  const finishDialog = useRef(null);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">...breath</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  const MuscleTimer = (props) => {
    return (
      <div className="DeepBreath">
       

        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={[["#0a0466", 1]]}
        //   onComplete={props.toggleIndex}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    );
  };

  const getMuscleRelaxationCards = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/staticactivityresource?activitytypeid=4", {
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
    getMuscleRelaxationCards();
  }, []);

  useEffect(() => {
    let timeout;
    if (currentIndex < staticActivityResources.length - 1) {
      timeout = setTimeout(() => setCurrentIndex(currentIndex + 1), 5000);
    }
    return () => clearTimeout(timeout);
  }, [staticActivityResources, currentIndex]);

  const constructNewActivityDetail = (evt) => {
    evt.preventDefault();
    const theActivityDetail = {
      activity_type_id: 4,
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
        {/* <div className="resourceCard-content"> */}
          <div className="Muscles">
          <h3 className="resourceCard__header">Preogressive Muscle Relaxation</h3>
          <div className="deepBreath">{staticActivityResources[currentIndex].resource} </div>
          <MuscleTimer />
          </div>
          <p>
          Take care not to hurt yourself while tensing your muscles. You should
          never pain while completing this exercise.
        </p>
        </div>
      {/* </div> */}
      <button
        type="button"
        className="breathButton"
        onClick={constructNewActivityDetail}
      >
        {" "}
        Finish
      </button>
    </>
  );
};

export default MuscleRelaxationContainer;
