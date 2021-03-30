import React from "react"
import { Route, Switch } from 'react-router-dom'

import Home from './screens/Home/Home'
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import PostDetail from './screens/PostDetail/PostDetail'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
