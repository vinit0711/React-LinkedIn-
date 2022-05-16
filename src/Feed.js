import React, { useEffect, useState } from 'react'
import "./InputOptions.css"

import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Post from './Post';
import { db } from './firebase';

import firebase from 'firebase';

function Feed() {
    const [posts, SetPosts] = useState([])
    const [input, SetInput] = useState("")

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                SetPosts(
                    snapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
                );
            })
    }, [])
    const sendPost = e => {
        e.preventDefault();
        // console.log("input==", input)
        db.collection("posts").add({
            name: "vinit deo",
            description: "input field",
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        SetInput("");

    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" onChange={e => SetInput(e.target.value)} value={input} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div class="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5f9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarMonthIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                // console.log("message==", message)
                < Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}

                />
            ))}

        </div>
    )
}

export default Feed