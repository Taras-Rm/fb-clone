import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import Login from './pages/Login/Login';
import {useSelector} from 'react-redux';

function App() {

  const user = useSelector(state => state.app.user)

  return (
    <div className="app">
      {
        !user ? (<Login />) :
        (
          <>
            <Header />
            <div className="app__content">
              <Sidebar />
              <Feed/>
              <Widgets />
            </div>
          </>
        )
      }
        
    </div>
  );
}

export default App;
