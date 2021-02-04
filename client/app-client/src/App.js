import {Router, Route, Switch} from 'react-router-dom';
import browserHistory from './browserHistory';

import './App.css';
import VotePage from './components/VotePage';
import MainPage from './components/MainPage';

function App() {

  



  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path='/VotePage' component={(VotePage)}/>
        <Route exact path='/' component={(MainPage)}/>

      </Switch>

    </Router>
  );
}

export default App;
