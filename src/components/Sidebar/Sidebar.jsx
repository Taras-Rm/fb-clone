import React from 'react';
import './Sidebar.css';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SidebarOption from './SidebarOption/SidebarOption';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';

function Sidebar() {
    const userPrep = useSelector(state => {
        return {
            photoUrl: state.app.user.photoURL,
            userName: state.app.user.displayName
        }
    })
    return (
        <div className="sidebar">
            <SidebarOption title={userPrep.userName} src={userPrep.photoUrl} />
            <SidebarOption Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarOption Icon={FlagIcon} title="Pages"/>
            <SidebarOption Icon={GroupIcon} title="Friends"/>
            <SidebarOption Icon={MessageIcon} title="Messanger"/>
            <SidebarOption Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarOption Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarOption Icon={ExpandMoreIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
