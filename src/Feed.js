import React, { useState } from 'react'
import "./InputOptions.css"

import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Post from './Post';
function Feed() {
    const [posts, SetPosts] = useState([])
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        {/* <button type="submit"></button> */}
                    </form>
                </div>
                <div class="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5f9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarMonthIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {posts.map(post => (
                <Post />
            ))}
            <Post name="Vinit Deo" description="test" message="Wow this worked" />
        </div>
    )
}

export default Feed