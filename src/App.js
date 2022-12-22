//import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
//export default class App extends Component {
  const App=()=>{
   const pageSize=10;
   const api=process.env.REACT_APP_NEWS_API;
   const [progress, setprogress] = useState(0)
  //render() {
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
       // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<News setprogress={setprogress} api={api} key="general" pageSize={pageSize} country="in" category="general"/>}  />
        <Route exact path="/business" element={<News setprogress={setprogress} api={api} key="business" pageSize={pageSize} country="in" category="business"/>}  />
        <Route exact path="/entertainment" element={<News setprogress={setprogress} api={api} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}  />
        <Route exact path="/health" element={<News setprogress={setprogress} api={api} key="health" pageSize={pageSize} country="in" category="health"/>}  />
        <Route exact path="/science" element={<News setprogress={setprogress} api={api} key="science" pageSize={pageSize} country="in" category="science"/>}  />
        <Route exact path="/sports" element={<News setprogress={setprogress} api={api} key="sports" pageSize={pageSize} country="in" category="sports"/>}  />
        <Route exact path="/technology" element={<News setprogress={setprogress} api={api} keys="technology" pageSize={pageSize} country="in" category="technology"/>}  />
      </Routes>
      </Router>
      </>
    )
  
}
export default App;