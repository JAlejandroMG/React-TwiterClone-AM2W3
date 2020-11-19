import React from 'react';
import './stylesTrend.css';

const Trend = (props) => {
  return (
    <div className="trend-container">
      <p>{props.category}</p>
      <p className="trend-content">{props.title}</p>
      <p>{props.noTweets} Tweets</p>
    </div>
)
}

export default Trend;
