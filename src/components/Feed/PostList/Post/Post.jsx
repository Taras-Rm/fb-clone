import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({userName, profileImg, timestamp, postText, postImg}) {
    return (
        <div className="post">
            <div className="post__profile">
                <Avatar src={profileImg} alt='' />
                <div className="post__info">
                    <h4>{userName}</h4>
                    <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </div>
            </div>
            <p className="post__text">
                {postText}
            </p>
            {
                postImg && <div className="post__img">
                        <img src={postImg} alt="" />
                    </div>
            }
            <hr />
            <div className="post__controll">
                <div className="post__option">
                    <ThumbUpAltIcon />
                    <span>Like</span>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <span>Comment</span>
                </div>
                <div className="post__option">
                    <TelegramIcon />
                    <span>Share</span>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post
