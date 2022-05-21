import { auth } from './firebase';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, logout, login } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Right from './Right';
import Sidebar from './Sidebar';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is login
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.name,
          photoURL: userAuth.profile

        }))
      } else {
        // logout the user
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {/* App Body */}
      {!user ? (<Login />) : (<div class="app__body">

        <Sidebar />
        <Feed />
        <Right />
      </div>)}

    </div >
  );
}

export default App;
