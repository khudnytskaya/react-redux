import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import SortedPosts from './components/SortedPosts/SortedPosts';
import PostDetails from './components/PostDetails/PostDetails';
import MoreDetails from './components/MoreDetails/MoreDetails';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Users} />
              <Route path="/posts/:id" render={({ match }) => {
                return <SortedPosts userId={match.params.id} />
              }} />
              <Route path="/details/:id" render={({ match }) => {
                return <PostDetails postId={match.params.id} />
              }} />
               <Route path="/moreDetails/:id" render={({ match }) => {
                return <MoreDetails postId={match.params.id} />
              }} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
