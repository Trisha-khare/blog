import React from 'react';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <switch>
      <Route path= '/' component={Home} />
      <Route path= '/blog/:id' component={Blog} />
    </switch>
    </div>
  );
};

export default App;
