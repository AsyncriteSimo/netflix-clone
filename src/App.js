import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { Routes, Route} from 'react-router-dom'
import LoginScreen from './components/Login/LoginScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import {logout, login, selectUser} from './features/userSlice'
import ProfileScreen from './components/Profile/ProfileScreen';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        //logged in user
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,          
        }))
      }else{
        //logged out 
        dispatch(logout())
      }
    })

    return unsubscribe;
  },[dispatch]);

  return (
    <>
        {!user ? (
          <LoginScreen />
          ) : (
          <div className="app">
            <Routes>         
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/profile" exact element={<ProfileScreen />}/>
            </Routes>
          </div>
        )}      
        
    </>
  );
}

export default App;
