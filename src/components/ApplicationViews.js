import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivityTypeList from "./activityType/ActivityTypeList";
import DeepBreathContainer from "./staticActivityResource/DeepBreathContainer";
import FiveFourThreeContainer from "./staticActivityResource/FiveFourThreeContainer";
import PositiveThoughtsContainer from "./staticActivityResource/PositiveThoughtsContainer";
import MuscleRelaxationContainer from "./staticActivityResource/MuscleTimer";
import ActivityDetailEditForm from "./activityDetail/activityDetailEditForm";
import TheDetail from "./activityDetail/detail"
import ActivityDetailList from "./activityDetail/activityDetailList"

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        path="/"
        render={(props) => {
          return <></>;
        }}
      />

      <Route
        path="/register"
        render={(props) => {
          return <Register {...props} />;
        }}
      />

      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} />;
        }}
      />
      <Route
        exact
        path="/activities"
        render={(props) => {
          return <ActivityTypeList {...props} />;
        }}
      />
      <Route
        exact
        path="/activities/1"
        render={(props) => {
          return <DeepBreathContainer {...props} />;
        }}
      />
      <Route
        exact
        path="/activities/2"
        render={(props) => {
          return <FiveFourThreeContainer {...props} />;
        }}
      />
      <Route
        exact
        path="/activities/3"
        render={(props) => {
          return <PositiveThoughtsContainer {...props} />;
        }}
      />
      <Route
        exact
        path="/activities/4"
        render={(props) => {
          return <MuscleRelaxationContainer {...props} />;
        }}
      />
      <Route
        exact
        path="/mystats"
        render={(props) => {
          return <ActivityDetailList {...props} />;
        }}
      />
      <Route
        
        path="/activitydetail/:activityDetailId(\d+)"
        render={(props) => {
          return <TheDetail {...props} />;
        }}
      />
      <Route
        
        path="/activitydetail/edit/:activityDetailId(\d+)"
        render={(props) => {
          return <ActivityDetailEditForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
