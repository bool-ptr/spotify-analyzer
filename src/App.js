// import React, { useState, useEffect } from 'react';
// import Dropdown from './Dropdown';
// import Listbox from './Listbox';
// import Detail from './Detail';
// import { Credentials } from './Credentials';
// import axios from 'axios';

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './login'
import Playlist from './playlist'
import './WebApp.css'

const App = () => {
  return (
      <BrowserRouter>
      <div className="back">
          <Route exact  path='/' component={Login}/>
          <Route exact path='/playlist' component={Playlist}/>
        </div>
      </BrowserRouter>
  )
}

export default App
