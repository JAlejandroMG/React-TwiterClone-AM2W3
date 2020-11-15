import React from 'react';
import Interaction from './Interaction/interaction';
import './stylesTweet.css';

class Tweet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        interactionsArray: [ 
          this.props.comments,
          this.props.retweets,
          this.props.likes
        ],
        selectedArray: [
          this.props.selectedComments,
          this.props.selectedRetweets,
          this.props.selectedLikes
        ]
    }
  }

  selected = (index) => {
    //Clonamos selectedArray
    let selectedArrayClone = JSON.parse(JSON.stringify(this.state.selectedArray));
    //Clonamos interactionsArray
    let interactionsArrayClone = JSON.parse(JSON.stringify(this.state.interactionsArray));
    //Actualizamos el valor de la propiedad selected e interaction
    if(this.state.selectedArray[index]) {
      interactionsArrayClone[index]--;
      selectedArrayClone[index] = false;
    } else {
      interactionsArrayClone[index]++;
      selectedArrayClone[index] = true;
    }
    //Actualizamos el estado
    this.setState({selectedArray: selectedArrayClone});
    this.setState({interactionsArray: interactionsArrayClone});
  }

    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="row-interactions">
                  {
                      this.props.iconList.map( (icon, index) => {
                          return (
                            <Interaction
                              key={index}
                              index={index}
                              source={icon}
                              interaction={this.state.interactionsArray[index]}
                              selected={this.state.selectedArray[index]}
                              selectedFn={this.selected} />
                          )
                      })
                  }
                </div>
            </div>
        )
    }
}

export default Tweet;
