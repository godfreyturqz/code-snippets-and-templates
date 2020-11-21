import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Counter from "./Counter";
import Home from './Home/Home';
import DataFetching from './DataFetching';
import StateManagement from './StateManagement/StateManagement';
import Pagination from './Pagination';
import ReactTable from './ReactTable/ReactTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/counter' component={Counter}/>
          <Route path='/' component={Home} exact/>
          <Route path='/pagination' component={Pagination}/>
          <Route path='/datafetching' component={DataFetching}/>
          <Route path='/reacttable' component={ReactTable}/>
          <Route path='/statemanagement' component={StateManagement}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
