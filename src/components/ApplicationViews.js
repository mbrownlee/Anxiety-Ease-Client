import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivityTypeList from "./activityType/ActivityTypeList";
import DeepBreathingList from "./staticActivityResource/DeepBreathingList";
import FiveFourThreeList from "./staticActivityResource/FiveFourThreeList";
import PositiveThoughtsList from "./staticActivityResource/PositiveThoughtsList";

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
          return <DeepBreathingList {...props} />;
        }}
      />
      <Route
        exact
        path="/activities/2"
        render={(props) => {
          return <FiveFourThreeList {...props} />;
        }}
      />
      <Route
        exact
        path="/activities/3"
        render={(props) => {
          return <PositiveThoughtsList {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
