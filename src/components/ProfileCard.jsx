import React from 'react'
import user_pic1 from "../images/user_profile/fox.png"


const ProfileCard = () => {
  return (
    <div className="comp_center">
        <div className='profilecard_comp'>
           <div className="profilecard_top">
                <img className='profilecard_profile_img' src={user_pic1} alt="user rofile"></img>
           </div>
           <div className="profilecard_bottom"></div>
        </div>
    </div>
  )
}

export default ProfileCard