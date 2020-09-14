import React from "react";
import { Link } from "react-router-dom";

const DeepBreathing = (props) => {
    const [breathingResources, setBreathingResources] = useState([]);
    const { isAuthenticated } = useSimpleAuth();
  
    const getDeepBreathCards = () => {
      if (isAuthenticated()) {
        fetch("http://localhost:8000/useractivityresource?activitytypeid=1", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem(
              "anxiety_ease_token"
            )}`,
          },
        })
          .then((res) => res.json())
          .then(setBreathingResources);
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
        {breathingResources.map((breathingResource) => (
          {/* <ActivityTypeCard key={`activityType-${activityType.id}`} activityType={activityType} /> */}
        ))}
      </div>
          {/* Here is where we will present timer */}
        </div>
      </div>
    </div>
  );
};

export default DeepBreathing;