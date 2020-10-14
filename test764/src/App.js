import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Reservation from './Reservation';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row">
          <div className="col-3">
            <Navbar/>
          </div>
          <div className="col-9">
            <Route path="/reservation" render={()=>{return <Reservation/>}}/>
            <Route path="/settings" render={()=>{return <h1>Это Настройки</h1>}}/>
            <Route path="/users" render={()=>{return <h1>Это список пользователей</h1>}}/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;