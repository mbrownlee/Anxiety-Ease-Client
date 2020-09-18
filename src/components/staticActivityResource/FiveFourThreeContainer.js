import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const FiveFourThreeContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([
    { resource: "" },
  ]);
//   const [currentCard, setCurrentCard] = useState({ resource: "" });
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
    let timeout
    if (currentIndex < staticActivityResources.length -1) {
        timeout = setTimeout(() => setCurrentIndex(currentIndex +1), 2000)
    } 
    return () => clearTimeout(timeout)
}, [staticActivityResources, currentIndex]);

//   useEffect(() => {
   
//     setCurrentCard(staticActivityResources[0]);
//   }, [staticActivityResources]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentIndex < staticActivityResources.length) {
//         const existingIndex = currentIndex +1;
//         setCurrentIndex(existingIndex);
//       } else {
//         clearInterval(interval);
//       }
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (currentIndex < staticActivityResources.length) {
//       setCurrentCard(staticActivityResources[currentIndex]);
//     }
//   }, [currentIndex]);

  return (
    <div className="resourceCard">
      <div className="resourceCard-content">
        <div>
          <h3>
            Out loud or in your head, answer each prompt. Notice what is around you.
          </h3>
          <div className="5-4-3-2-1">{staticActivityResources[currentIndex].resource}</div>
          <button>Finished</button>
          
        </div>
      </div>
    </div>
  );
};

export default FiveFourThreeContainer;
