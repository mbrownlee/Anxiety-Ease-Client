import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const FiveFourThreeContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([
    { resource: "" },
  ]);
  const [currentCard, setCurrentCard] = useState({ resource: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAuthenticated } = useSimpleAuth();

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
   
    setCurrentCard(staticActivityResources[0]);
  }, [staticActivityResources]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < staticActivityResources.length) {
        const existingIndex = currentIndex +1;
        setCurrentIndex(existingIndex);
      } else {
        clearInterval(interval);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex < staticActivityResources.length) {
      setCurrentCard(staticActivityResources[currentIndex]);
    }
  }, [currentIndex]);

  return (
    <div className="resourceCard">
      <div className="resourceCard-content">
        <div>
          <h3>
            Out loud or in your head, answer each prompt. Notice what is around you.
          </h3>
          <div className="positiveThoughts">{currentCard.resource}</div>
        </div>
      </div>
    </div>
  );
};

export default FiveFourThreeContainer;
