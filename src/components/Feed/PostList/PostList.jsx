import React, {useState, useEffect} from 'react'
import db from '../../../firebase';
import Post from './Post/Post'
import './PostList.css'



function PostList() {
    //const image = "https://images.hindustantimes.com/img/2021/04/01/1600x900/46b61b587f6946e18531ae4d4340e0f1-46b61b587f6946e18531ae4d4340e0f1-0_1617258689295_1617258712657.jpg";

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        });

    }, [])
 
    return (
        <div className="postList">
            {
                posts.map(post => {
                    console.log(post)
                    return <Post key={post.data.id} userName={post.data.username} profileImg={post.data.profilePic} timestamp={post.data.timestamp} postText={post.data.text} postImg={post.data.image} />
                })
            }
        </div>
    )
}

export default PostList
