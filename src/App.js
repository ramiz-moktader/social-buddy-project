import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'
import Comment from './Components/Comment/Comment'
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Router>
        <Switch> 
          
          <Route path ="/home">
            <Home> </Home>
          </Route>
          
          <Route path = '/post/:postId' > 
          <Comment> </Comment>
          </Route>
          <Route path = '/posts'> 
           <Home> </Home>
          </Route>

          
          <Route exact path ='/' >
            <Home> </Home>
          </Route>
          <Route path = '*'> 
          <NotFound> </NotFound>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
