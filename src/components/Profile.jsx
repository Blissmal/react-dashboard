import React from 'react'
import ProfileHeader from './ProfileHeader'
import "../styles/profile.css"
import userImage from '../assets/download.jpg'

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--details">
          <img src={userImage} alt="" />
          <h3 className='username'>Bliss Mal</h3>
          <span className="profession">Teacher</span>
        </div>
        <div className="user-courses"></div>
      </div>
    </div>
  )
}

export default Profile
