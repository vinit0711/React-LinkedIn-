import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"

function HeaderOption({ avatar, Icon, title, onClick }) {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className="headerOption__icon" src={avatar} />}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption