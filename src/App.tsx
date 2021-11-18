import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import MainNavigateion from './ui/MainNavigation';

import MainPage from './ui/MainPage'
import Home from './pages/Home';
import Articles from './pages/Articles';
import Photos from './pages/Photos';
import About from './pages/About';

function App() {
  return (
   <BrowserRouter>
       <MainNavigateion/>
       <MainPage>
        <Switch> 
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/articles" exact>
              <Articles/>
          </Route>
          <Route path="/photos" exact>
              <Photos/>
          </Route>
          <Route path="/about" exact>
              <About/>
          </Route>
       </Switch>
       </MainPage>
    </BrowserRouter>
  );
}

export default App;
