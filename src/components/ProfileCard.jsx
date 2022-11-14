import React from 'react'
import user_pic1 from "../images/user_profile/fox.png"


const ProfileCard = (props) => {
    return (
        <div className="comp_center">
            <div className='profilecard_comp'>
                <div className="profilecard_top">
                    <img className='profilecard_profile_img' src={user_pic1} alt="user rofile"></img>
                    <button className="profile_follow_btn">Follow</button>
                </div>
                <div className="profilecard_bottom">
                    <div className='profile_name'>
                        {props.username}<div className='profile_userid'>@{props.userid}</div>
                    </div>
                    <div className="profile_bio">{props.bio}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard