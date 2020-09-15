import React, { useEffect, useState } from "react";
import StaticActivityCard from "./StaticActivityCard";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const PositiveThoughtsList = (props) => {
    const [staticActivityResources, setStaticActivityResources] = useState([]);
    const { isAuthenticated } = useSimpleAuth();
  
    const getPositiveThoughtsCards = () => {
      if (isAuthenticated()) {
        fetch("http://localhost:8000/staticactivityresource?activitytypeid=3", {
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
      getPositiveThoughtsCards()
  }, []);

  
  return (
    
    <div className="resourceCard">
      <div className="resourceCard-content">
        <div>
        <h2>Positive Thoughts</h2>
        <p>Out loud or in your head, answer read each fact.</p>
        <div className="PositiveThoughts">
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

export default PositiveThoughtsList;