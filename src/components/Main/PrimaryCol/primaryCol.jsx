import React from 'react';
import PostTweet from './PostTweet/postTweet';
import Feed from './Feed/feed';
import {feed} from '../../../databases/feed';
import './stylesPrimaryCol.css';

class PrimaryCol extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      tweets: feed,
      newTweet: '',
    }
  }


  addTweet = (e) => {
    const tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    const newTweetObj = {
      profileUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      profile: "Usuario",
      username: "YoSoyElUsuario",
      content: this.state.newTweet,
      interaction: [
        {selectedComments: false, comments: 0},
        {selectedRetweets: false, retweets: 0},
        {selectedLikes: false, likes: 0}
      ],
      verified: true,
      blocked: true
    };
    tweetsClone.splice(0,0,newTweetObj); //problema
    this.setState({ tweets: tweetsClone, newTweet: "" });
    e.preventDefault();
  };


  handleInput = (evento) => {
    //Capturar lo que está escribiendo el usuario
    const tweet = evento.target.value;
    this.setState({ newTweet: tweet });
  };

  toggleDropdownMenu = (index) => {
    const tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    tweetsClone[index].showContextM = !tweetsClone[index].showContextM;
    this.setState({tweets: tweetsClone});
  }

  removeTweeter = (index) => {
    const tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    tweetsClone.splice(index,1);
    this.setState({tweets: tweetsClone});
  }

  render() {
    return (
      <div className="t-col-container">
          <h3>Inicio</h3>
          <PostTweet
            profileUrl={this.props.profileUrl}
            newTweet={this.state.newTweet}
            handleInputFn={this.handleInput}
            addTweetFn={this.addTweet}
          />
          <Feed tweets={this.state.tweets} toggleDropdownMenuFn={this.toggleDropdownMenu} removeTweeterFn={this.removeTweeter} />
      </div>
    )
  }
}

export default PrimaryCol;
