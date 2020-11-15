import React from 'react';
import Trend from './Trend/trend';
import './stylesTrends.css';

import {trends} from '../../../../databases/trends';

class Trends extends React.Component {
  constructor() {
      super();
      this.state = {
          trends: trends
      }
  }

  render() {
      return (
        <div className="trends-container">
          <h2 className="trends-title">¿Qué está pasando?</h2>
          <div className="trends">
              {
                  this.state.trends.map((trend, index) => {
                      return (
                        <Trend
                        key={index}
                        category={trend.category}
                        title={trend.title}
                        noTweets={
                          trend.noTweets = trend.noTweets > 1000 ? trend.noTweets/1000 + "mil" : trend.noTweets} />
                      )
                  })
              }
              
          </div>
        </div>
      );
  }
}

export default Trends;
