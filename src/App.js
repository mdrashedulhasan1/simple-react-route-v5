import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">        
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/friends">
          <Friends></Friends>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/more/:friendId">
          <FriendDetails></FriendDetails>
          </Route>
          <Route path="/post/:postId">
          <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
