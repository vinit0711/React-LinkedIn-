import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import background from './background.jpg'
import "./Sidebar.css"
import { selectUser, logout, login } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    console.log('Sidebar user', user)

    const recentItem = (topic) => {
        return (
            <div div class="sidebar__recentItem" >
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }
    return (
        <div className="sidebar">
            <div class="sidebar__top">
                <img src={background} alt="" />
                <Avatar src={user.photoURL} className="sidebar__avatar" />
                <h2>Vinit Deo</h2>
                <h4>{user.email}</h4>
            </div>
            <div class="sidebar__stats">
                <div class="sidebar__stat">
                    <p>Who Viewed you </p>
                    <div class="sidebar__statNumber">200</div>
                </div>
                <div class="sidebar__stat">
                    <p>Views on post </p>
                    <div class="sidebar__statNumber">100</div>
                </div>
            </div>
            <div class="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('software')}
                {recentItem('developer')}
                {recentItem('Java')}
            </div>
        </div >
    )
}

export default Sidebar