import { lazy, Suspense } from 'react'
import 'dotenv/config'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
const Counter = lazy(() => import('./Counter'))
const Nav = lazy(() => import('./Home/Nav'))
const DataFetching = lazy(() => import('./DataFetching'))
const StateManagement = lazy(() => import('./StateManagement/StateManagement'))
const Pagination = lazy(() => import('./Pagination'))
const ReactTable = lazy(() => import('./ReactTable/ReactTable'))
const Search = lazy(() => import('./Search')) 
const UrlParsing = lazy(() => import('./UrlParsing')) 
const Modal = lazy(() => import('./Modal')) 
const ImageSlider = lazy(() => import('./ImageSlider')) 
const Cloudinary = lazy(() => import('./Cloudinary')) 
const Table = lazy(() => import('./Table')) 

const Loading = () => <div>Loading...</div>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense  fallback={<Loading/>}>
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
            <Route path='/table' component={Table}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
