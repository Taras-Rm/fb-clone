import { Skeleton } from '@material-ui/lab';
import React, {useState, useEffect} from 'react'
import db from '../../../firebase';
import Post from './Post/Post';
//import Skeleton from '@material-ui/lab/Skeleton';

import './PostList.css'



function PostList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        });
    }, [])
 
    return (
        <div className="postList">
            {
                posts.length ? 
                posts.map(post => (
                    <Post key={post.data.id} userName={post.data.username} profileImg={post.data.profilePic} timestamp={post.data.timestamp} postText={post.data.text} postImg={post.data.image} />
                )) :
                <>
                    <Skeleton className="postList__skeleton--circle" variant="circle" animation="wave" />
                    <Skeleton className="postList__skeleton--square" variant="rect" animation="wave"/>
                    <Skeleton className="postList__skeleton--circle" variant="circle" animation="wave"/>
                    <Skeleton className="postList__skeleton--square" variant="rect" animation="wave"/>
                </>
            }
        </div>
    )
}

export default PostList
