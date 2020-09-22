import React, { useState, useEffect } from "react";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const ActivityDetailEditForm = (props) => {
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
          Authorization: `Token ${localStorage.getItem("anxiety_ease_token")}`,
        },
      })
        .then((res) => res.json())
        .then(setActivityTypes);
    }
  };

  useEffect(() => {
    getActivityTypes();
  }, []);

  const handleFieldChange = (evt) => {
    console.log(activityDetail);
    const stateToChange = { ...activityDetail };
    stateToChange[evt.target.id] = evt.target.value;
    console.log(stateToChange);
    setActivityDetail(stateToChange);
  };

  const updateActivityDetail = (editedActivityDetail) => {
    fetch(
      `http://localhost:8000/activitydetail/${props.match.params.activityDetailId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("anxiety_ease_token")}`,
        },
        body: JSON.stringify(editedActivityDetail),
      }
    )
      .then((response) => response.json())
      .then(() => {
        console.log("Added");
        props.history.push("/mystats");
      });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const editedActivityDetail = {
      id: props.match.params.activityDetailId,
      created_at: activityDetail.created_at,
      rating: parseInt(activityDetail.rating),
      note: activityDetail.note,
      activity_type_id: parseInt(activityDetail.activity_type_id),
    };
    if (props.match.params.activityDetailId) {
      updateActivityDetail(editedActivityDetail);
    }
  };

  useEffect(() => {
    if (props.match.params.activityDetailId) {
      fetch(
        `http://localhost:8000/activitydetail/${props.match.params.activityDetailId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem(
              "anxiety_ease_token"
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then(setActivityDetail);
    }
  }, [props.match.params.activityDetailId]);

  return (
    <>
      <p>
        You can view the details and edit to make notes (what triggered your
        anxiety, thoughts, feelings, etc) and rate effectiveness for your own
        reference. Or you can delete the activity.
      </p>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="rating">Rating:</label>
            <p>
              Did this activity help you feel better? 1 = not really to 5 = a
              lot better
            </p>
            <input
              type="range"
              id="rating"
              name="rating"
              min="1"
              max="5"
              onChange={handleFieldChange}
              id="rating"
              value={activityDetail.rating}
            />

            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="note">Notes</label>
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="note"
                placeholder="note"
                value={activityDetail.note}
              />
            </div>
          </div>
          <div className="alignRight">
            <button onClick={handleSubmit}>Save</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ActivityDetailEditForm;
