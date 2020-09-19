import React, { useState, useEffect } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";


const ActivityDetailForm = (props) => {
  const [activityDetail, setActivityDetail] = useState({
    activity_type_id: "",
    rating: "",
    note: "",
  });
  const [activityTypes, setActivityTypes] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getActivityTypes = () => {
    if (isAuthenticated()) {
      fetch("http://localhost:8000/activitytype", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem(
            "anxiety_ease_token"
          )}`,
        },
      })
        .then((res) => res.json())
        .then(setActivityTypes);
    }
  };

  useEffect(() => 
  {
    getActivityTypes()
}, []);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...activityDetail };
    stateToChange[evt.target.id] = evt.target.value;
    setActivityDetail(stateToChange);
  };

  const constructNewActivityDetail = (evt) => {
    evt.preventDefault();
      const theActivityDetail = {
        rating: activityDetail.rating,
        note: activityDetail.note,
        activity_type_id: parseInt(activityDetail.activity_type_id),
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
        .then(() => {
            console.log("Added");
            props.history.push("/activities");
        });
    }
    
  

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="rating"
              placeholder="Activity rating"
              value={activityDetail.rating}
            />
            <label htmlFor="note">Notes</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="note"
              placeholder="note"
              value={activityDetail.note}
            />
            {/* <select
              value={product.product_type_id}
              id="product_type_id"
              onChange={handleFieldChange}
            >
              <option value="">Product Category</option>
              {productTypes.map((productType) => (
                <option key={productType.id} value={productType.id}>
                  {productType.name}
                </option>
              ))}
            </select> */}
          </div>
          <div className="alignRight">
            <button type="button" onClick={constructNewActivityDetail}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};


export default ActivityDetailForm;