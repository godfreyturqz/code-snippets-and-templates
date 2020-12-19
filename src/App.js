import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Counter from "./Counter"
import Nav from './Home/Nav'
import DataFetching from './DataFetching'
import StateManagement from './StateManagement/StateManagement'
import Pagination from './Pagination'
import ReactTable from './ReactTable/ReactTable'
import Search from './Search'
import UrlParsing from './UrlParsing'
import Modal from './Modal'
import ImageSlider from './ImageSlider'
import Cloudinary from './Cloudinary'
import 'dotenv/config'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/counter' component={Counter}/>
          <Route path='/pagination' component={Pagination}/>
          <Route path='/datafetching' component={DataFetching}/>
          <Route path='/reacttable' component={ReactTable}/>
          <Route path='/search' component={Search}/>
          <Route path='/statemanagement' component={StateManagement}/>
          <Route path='/urlparsing/:id' component={UrlParsing}/>
          <Route path='/modal' component={Modal}/>
          <Route path='/imageslider' component={ImageSlider}/>
          <Route path='/cloudinary' component={Cloudinary}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
