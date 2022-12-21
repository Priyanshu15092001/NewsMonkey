//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
   pageSize=10;
   api=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} api={this.api} key="general" pageSize={this.pageSize} country="in" category="general"/>}  />
        <Route exact path="/business" element={<News setProgress={this.setProgress} api={this.api} key="business" pageSize={this.pageSize} country="in" category="business"/>}  />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} api={this.api} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}  />
        <Route exact path="/health" element={<News setProgress={this.setProgress} api={this.api} key="health" pageSize={this.pageSize} country="in" category="health"/>}  />
        <Route exact path="/science" element={<News setProgress={this.setProgress} api={this.api} key="science" pageSize={this.pageSize} country="in" category="science"/>}  />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} api={this.api} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}  />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} api={this.api} keys="technology" pageSize={this.pageSize} country="in" category="technology"/>}  />
      </Routes>
      </Router>
      </>
    )
  }
}
