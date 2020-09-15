import React, { useEffect, useState } from "react";
import StaticActivityCard from "./StaticActivityCard";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const FiveFourThreeList = (props) => {
    const [staticActivityResources, setStaticActivityResources] = useState([]);
    const { isAuthenticated } = useSimpleAuth();
  
    const getFiveFourThreeCards = () => {
      if (isAuthenticated()) {
        fetch("http://localhost:8000/staticactivityresource?activitytypeid=2", {
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
      getFiveFourThreeCards()
  }, []);

  
  return (
    
    <div className="resourceCard">
      <div className="resourceCard-content">
        <div>
        <h2>5-4-3-2-1</h2>
        <p>Out loud or in your head, answer each prompt. Pay attention to what is around you.</p>
        <div className="5-4-3-2-1">
        {staticActivityResources.map((staticActivityResource) => (
          <StaticActivityCard key={`staticActivityResource-${staticActivityResource.id}`} staticActivityResource={staticActivityResource} />
        ))}
      </div>
          {/* Here is where we will present timer */}
        </div>
      </div>
    </div>
  );
};

export default FiveFourThreeList;