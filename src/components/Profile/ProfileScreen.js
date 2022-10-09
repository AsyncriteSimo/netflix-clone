import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Nav from '../Nav/Nav'
import './profileScreen.css'

function ProfileScreen() {

    const user = useSelector(selectUser);

  return (
    <div className="profilescreen" >
       <Nav />

       <div className="profilescreen__body">
        <h1>Edit Profile</h1>
        <div className="profilescreen__info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

            <div className="profilescreen__details">
            <h2>{user.email}</h2>
            <div className="profilescreen__plans">

                <h3>Plans</h3>
                

                <button onClick={()=>{auth.signOut()}} className="profilescreen__signOut">Sign Out</button>
            </div>
        </div>

        </div>
        
       </div>
    </div>
  )
}

export default ProfileScreen