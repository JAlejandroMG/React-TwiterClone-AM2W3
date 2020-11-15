import React from "react";
import Tweet from "./Tweet/tweet";
import {feed} from '../../../../databases/feed';
import {
  HeartSolid,
  ChatSolid,
  ShareSolid
} from "@graywolfai/react-heroicons";

import './stylesFeed.css';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            interactionsArray: feed.interaction,
            iconArray: [
              <ChatSolid className="interaction-icon" />, 
              <ShareSolid className="interaction-icon" />, 
              <HeartSolid className="interaction-icon" />
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.tweets.map((tweet, index) => {
                        return (
                          <Tweet
                          key={index}
                          tweetIndex={index}
                          profileUrl={tweet.profileUrl}
                          profile={tweet.profile}
                          username={tweet.username}
                          content={tweet.content}
                          selectedComments ={tweet.interaction[0].selectedComments}
                          comments={tweet.interaction[0].comments}
                          selectedRetweets={tweet.interaction[1].selectedRetweets}
                          retweets={tweet.interaction[1].retweets}
                          selectedLikes={tweet.interaction[2].selectedLikes}
                          likes={tweet.interaction[2].likes}
                          iconList={this.state.iconArray}/>
                        )
                    })
                }                
            </div>
        );
    }
}

export default Feed;
