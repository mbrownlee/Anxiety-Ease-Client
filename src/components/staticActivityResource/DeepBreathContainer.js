import React, { useEffect, useState } from "react";
import DeepBreathTimer from "./DeepBreathTimer";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const DeepBreathContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([{resource:""}]);
  const [currentPrompt, setCurrentPrompt] = useState({resource:""});
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAuthenticated } = useSimpleAuth();

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
        setCurrentIndex(1)
    } else {
        setCurrentIndex(0)
    }
      return [true, 1000]
  }

  return (
    <div className="resourceCard">
      <div className="resourceCard-content">
        <div>
          <DeepBreathTimer toggleIndex={toggleIndex}/>
          <div className="deepBreath">{currentPrompt.resource}</div>
        </div>
        <button>Finished</button>
      </div>
    </div>
  );
};

export default DeepBreathContainer;
