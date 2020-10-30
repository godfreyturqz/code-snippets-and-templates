import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import DataFetching from './DataFetching/DataFetching';
import StateManagement from './StateManagement/StateManagement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/'><Home /></Route>
          <Route path='/datafetching'><DataFetching/></Route>
          <Route path='/statemanagement'><StateManagement/></Route>
        </Switch>
        <StateManagement/>
      </BrowserRouter>
      <br/>
      
    </div>
  );
}

export default App;
