import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Counter from "./Counter";
import Home from './Home/Home';
import DataFetching from './DataFetching';
import StateManagement from './StateManagement/StateManagement';
import Pagination from './Pagination';
import ReactTable from './ReactTable/ReactTable';
import Search from './Search';
import UrlParsing from './UrlParsing';
import Modal from './Modal';

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
          <Route path='/search' component={Search}/>
          <Route path='/statemanagement' component={StateManagement}/>
          <Route path='/urlparsing/:id' component={UrlParsing}/>
          <Route path='/modal' component={Modal}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
