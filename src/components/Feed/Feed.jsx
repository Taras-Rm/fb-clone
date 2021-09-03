import React from 'react';
import './Feed.css';
import PostCreator from './PostCreator/PostCreator';
import PostList from './PostList/PostList';
import StoriesBox from './StoriesBox/StoriesBox';

function Feed() {
    return (
        <div className="feed">
            <StoriesBox/>
            <PostCreator />
            <PostList />
        </div>
    )
}

export default Feed
