import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarOption.css'

function SidebarOption({ Icon, title, src}) {
    return (
        <div className="sidebar__option">
           {src ? <Avatar src={src}/> : <Icon />}
           <h4>{title}</h4>
        </div>
    )
}

export default SidebarOption;
