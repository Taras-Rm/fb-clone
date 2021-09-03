import React from 'react';
import './Header.css';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';

function Header() {

    const userPrep = useSelector(state => {
        return {
            photoUrl: state.app.user.photoURL,
            userName: state.app.user.displayName
        }
    })

    return (
        <div className="header">
            <div className="header__left">
                <img style={{height: 40}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="logo" />
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div> 
            </div>
            <div className="header__center">
                <div className="header__icon header__icon--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__icon">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__profile">
                    <Avatar src={userPrep.photoUrl} alt="avatar" />
                    <h4>{userPrep.userName}</h4>
                </div>
                <div className="header__controll">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
