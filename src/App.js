import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Right from './Right';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div class="app__body">

        <Sidebar />
        <Feed />
        <Right />
      </div>
    </div >
  );
}

export default App;
