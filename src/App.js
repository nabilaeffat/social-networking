import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/HOME">
            <Home/>
          </Route>
          <Route path="/PostDetails/:id">
            <PostDetails/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
