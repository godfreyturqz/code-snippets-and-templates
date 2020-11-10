import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import DataFetching from './DataFetching/DataFetching';
import StateManagement from './StateManagement/StateManagement';
import ReactTable from './ReactTable/ReactTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/datafetching' component={DataFetching}/>
          <Route path='/statemanagement' component={StateManagement}/>
          <Route path='/reacttable' component={ReactTable}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
