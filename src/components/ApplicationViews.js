import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivityTypeList from "./activityType/ActivityTypeList";
import DeepBreathContainer from "./staticActivityResource/DeepBreathContainer";
import FiveFourThreeList from "./staticActivityResource/FiveFourThreeList";
import PositiveThoughtsList from "./staticActivityResource/PositiveThoughtsList";
import ActivityDetailForm from "./activityDetail/activityDetailForm";

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
      <Route
        exact
        path="/activitydetail/new"
        render={(props) => {
          return <ActivityDetailForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
