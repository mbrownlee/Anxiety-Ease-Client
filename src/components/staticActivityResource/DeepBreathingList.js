import React, { useEffect, useState } from "react";
import DeepBreathingCard from "./DeepBreathingCard";
// import StaticActivityCard from "./StaticActivityCard";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const DeepBreathingList = (props) => {
    const [staticActivityResources, setStaticActivityResources] = useState([]);
    const { isAuthenticated } = useSimpleAuth();
  
    const getDeepBreathCards = () => {
      if (isAuthenticated()) {
        fetch("http://localhost:8000/staticactivityresource?activitytypeid=1", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem(
              "anxiety_ease_token"
            )}`,
          },
        })
          .then((res) => res.json())
          .then(setStaticActivityResources);
      }
    };
  
    useEffect(() => 
    {
      getDeepBreathCards()
  }, []);

  
  return (
    
    <div className="resourceCard">
      <div className="resourceCard-content">
        <div>
        <h2>Deep Breaths</h2>
        <p>Concentrate on breathing in and out with the timer.</p>
        <div className="deepBreath">
        {staticActivityResources.map((staticActivityResource) => (
          <DeepBreathingCard key={`staticActivityResource-${staticActivityResource.id}`} staticActivityResource={staticActivityResource} />
        ))}
      </div>
          {/* Here is where we will present timer */}
        </div>
      </div>
    </div>
  );
};

export default DeepBreathingList;