import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Again...</div>;
  }

  return (
    <div className="timer">
      <div className="text">You are</div>
      <div className="text">going to be</div>
      <div className="value">{remainingTime}</div>
      <div className="text">okay.</div>
    </div>
  );
};

const DeepBreathTimer = (props) => {
  return (
    <div className="DeepBreath">
      <h3>Deep Breathing</h3>
      <p>Breath in 5 seconds...Breath out 5 seconds </p>
      <CountdownCircleTimer
        isPlaying
        duration={5}
        colors={[
          ["#0a0466", 0.33],
          ["#0a0466", 0.33],
          ["#0a0466", 0.33],
        ]}
        onComplete={props.toggleIndex}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default DeepBreathTimer;
