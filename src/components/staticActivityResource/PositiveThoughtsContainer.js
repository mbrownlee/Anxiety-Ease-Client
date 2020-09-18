import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const PositiveThoughtsContainer = (props) => {
  const [staticActivityResources, setStaticActivityResources] = useState([
    { resource: "" },
  ]);
//   const [currentCard, setCurrentCard] = useState({ resource: "test" });
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
  }, [staticActivityResources, currentIndex])

//   useEffect(() => {
//    debugger
//     setCurrentCard(staticActivityResources[0]);
//   }, [staticActivityResources]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//         if (currentIndex < staticActivityResources.length) {
//             debugger
//         const existingIndex = currentIndex +1;
//         setCurrentIndex(existingIndex);
//       } else {
//         clearInterval(interval);
//       }
//     }, 5000);
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
            Out loud or in your head, read each fact and try to believe it.
          </h3>
          <div className="positiveThoughts">{staticActivityResources[currentIndex].resource}</div>
        </div>
      </div>
    </div>
  );
};

export default PositiveThoughtsContainer;
