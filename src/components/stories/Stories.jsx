import { AuthContext } from "../../context/authContext";
import "./stories.scss"

import React, { useContext } from 'react'

const Stories = () => {

    const { currentUser } = useContext(AuthContext)

    // Temporary
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
    ];

    return (
        <div className="stories" >
            <div className="story" >
                <img src={currentUser.profilePicture} />
                <span> {currentUser.name} </span>
                <button>+</button>
            </div>
            {
                stories.map((story) => (
                    <div className="story" key={story.id}>
                        <img src={story.img} />
                        <span> {story.name} </span>
                    </div>
                ))
            }
        </div >
    )
}

export default Stories
