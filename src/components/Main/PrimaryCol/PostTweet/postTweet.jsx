import React from 'react';
import './stylesPostTweet.css';

const PostTweet = (props) => {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl}  alt="profile" />
                </div>
                <form>
                    <input
                      placeholder="¿Qué está pasando?"
                      value={props.newTweet}
                      onChange={props.handleInputFn}
                    />
                    <div className="t-post-options">
                        <button onClick={props.addTweetFn}>Twittear</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default PostTweet;
