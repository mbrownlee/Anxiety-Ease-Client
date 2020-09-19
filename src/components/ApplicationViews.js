import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivityTypeList from "./activityType/ActivityTypeList";
import DeepBreathContainer from "./staticActivityResource/DeepBreathContainer";
import FiveFourThreeContainer from "./staticActivityResource/FiveFourThreeContainer";
import PositiveThoughtsContainer from "./staticActivityResource/PositiveThoughtsContainer";
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
        path="/activitydetail/new"
        render={(props) => {
          return <ActivityDetailForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
