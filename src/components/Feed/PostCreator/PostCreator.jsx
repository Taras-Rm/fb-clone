import { Avatar } from '@material-ui/core'
import React from 'react'
import './PostCreator.css'

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import db from '../../../firebase';
import firebase from 'firebase';

function PostCreator() {

    const userPrep = useSelector(state => {
        return {
            photoUrl: state.app.user.photoURL,
            userName: state.app.user.displayName
        }
    })

    const [postText, setPostText] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //
        //db
        db.collection("posts").add({
            username: userPrep.userName,
            text: postText,
            profilePic: userPrep.photoUrl,
            image: imgUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        //

        setPostText('');
        setImgUrl('');
    }

    return (
        <div className="postCreator">
            <form className="postCreator__top" onSubmit={handleSubmit}>
                <Avatar src={userPrep.photoUrl} className="postCreator__avatar"/>
                <input 
                    value={postText}
                    onChange={e => setPostText(e.target.value)}
                    className="postCreator__text"
                    placeholder={`What\`s on yor mind, ${userPrep.userName} ?`} type="text" 
                />
                <input 
                    value={imgUrl}
                    onChange={e => setImgUrl(e.target.value)}
                    className="postCreator__url" 
                    placeholder="IMG url (optional)" type="text" 
                />
                <button>Enter submit</button>
            </form>
            <div className="postCreator__bottom">
                <div className="postCreator__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <span>Live Video</span>
                </div>
                <div className="postCreator__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <span>Photo/Video</span>
                </div>
                <div className="postCreator__option">
                    <InsertEmoticonIcon style={{color: "yellow"}}/>
                    <span>Feeling/Activity</span>
                </div>
            </div>
        </div>
    )
}

export default PostCreator
