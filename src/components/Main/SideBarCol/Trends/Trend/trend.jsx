import React from 'react';
import './stylesTrend.css';

class Trend extends React.Component{
  constructor(props) {
    super(props);
  }

    render(){
        return (
            <div className="trend-container">
              <p>{this.props.category}</p>
              <p className="trend-content">{this.props.title}</p>
              <p>{this.props.noTweets} Tweets</p>
            </div>
        )
    }
}

export default Trend;
