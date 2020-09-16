import React, { useEffect, useState } from "react";
import DeepBreathTimer from "./DeepBreathTimer";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const DeepBreathContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([{resource:""}]);
  const [currentPrompt, setCurrentPrompt] = useState({resource:""});
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


  return (
    <div className="resourceCard">
      <div className="resourceCard-content">
        <div>
          <DeepBreathTimer onComplete={() => [true, 1000], {currentPrompt}}/>
          <div className="deepBreath">{currentPrompt.resource}</div>
        </div>
      </div>
    </div>
  );
};

export default DeepBreathContainer;
