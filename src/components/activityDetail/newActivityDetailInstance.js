// import React, { useState, useEffect } from "react";
// import useSimpleAuth from "../../hooks/useSimpleAuth";

// const NewActivityDetailButton = (props) => {
//   const [activityDetail, setActivityDetail] = useState({
//       activity_type_id: "",
//       rating: "",
//       note: "",
//     });
//   const [activityTypes, setActivityTypes] = useState([]);
//   const { isAuthenticated } = useSimpleAuth();

//   const getActivityTypes = () => {
//       if (isAuthenticated()) {
//         fetch("http://localhost:8000/activitytype", {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             Authorization: `Token ${localStorage.getItem(
//               "anxiety_ease_token"
//             )}`,
//           },
//         })
//           .then((res) => res.json())
//           .then(setActivityTypes);
//       }
//     };

//   useEffect(() => 
//     {
//       getActivityTypes()
//   }, []);

//   const handleFieldChange = (evt) => {
//     const stateToChange = { ...activityDetail };
//       stateToChange[evt.target.id] = evt.target.value;
//       setActivityDetail(stateToChange);
//     };

//   const constructNewActivityDetail = (evt) => {
//       evt.preventDefault();
//         const theActivityDetail = {
//           rating: activityDetail.rating,
//           note: activityDetail.note,
//           activity_type_id: parseInt(activityDetail.activity_type_id),
//         };
//         fetch("http://localhost:8000/activitydetail", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 Authorization: `Token ${localStorage.getItem("anxiety_ease_token")}`,
//               },
//               body: JSON.stringify(theActivityDetail),
//           })
//           .then((response) => response.json())
//           .then(() => {
//               console.log("Added");
//               props.history.push("/activitydetail");
//           });
//       }
//   }

//   return (
//     <button type="button" onClick={constructNewActivityDetail}>Finished</button>
//   )

// export default NewActivityDetailButton;