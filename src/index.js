import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './index.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './components/MainPage/MainPage';
import OrthopetsList from './components/OrthopetsList/OrthopetsList';
import OrthopetPage from './components/orthopetPage/OrthopetPage';

ReactDOM.render(
  <Router>
    <div className='app-body'>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route path='/orthopets-list' element={<OrthopetsList />}/>
        <Route path='/orthopets-list/:id' element={<OrthopetPage />}/>
      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
);