import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home';

export default () => 
(<BrowserRouter>
    <Route path="/home" component={Home} />
</BrowserRouter>)
 