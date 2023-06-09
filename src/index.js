import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './ch03/library';
import Clock from './ch04/clock';
import CommentList from './ch05/CommentList';
import NotificationList from './ch06/NotificationList';
import Accomodate from './ch07/accommodate';
import ConfirmButton from './ch08/ConfirmButton';
import LandingPage from './ch09/LandingPage';
import AttendanceBook from './ch10/AttendanceBook';
import Calculator from './ch12/Calculator';
import ProfileCard from './ch13/ProfileCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
