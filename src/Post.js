import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import "./Post.css"
import InputOptions from './InputOptions';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div class="post__header">
                <Avatar />
                <div class="post__inf">
                    <h2>Vinit Deo</h2>
                    <p>Description</p>
                </div>
            </div>
            <div class="post__body">
                <p>Post Goes here</p>
            </div>
            <div class="post__buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOptions Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post