import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { News } from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 9;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          {/* <News pagesize={this.pagesize} category="sports" /> */}
          <Routes>
          <Route exact path="/" element={<News key="general" pagesize={this.pagesize} category="general" />}/>
            <Route exact path="/business" element={<News key="business" pagesize={this.pagesize} category="business" />}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={this.pagesize} category="entertainment" />}/>
            <Route exact path="/general" element={<News key="general" pagesize={this.pagesize} category="general" />}/>
            <Route exact path="/health" element={<News key="health" pagesize={this.pagesize} category="health" />}/>
            <Route exact path="/science" element={<News key="science" pagesize={this.pagesize} category="science" />}/>
            <Route exact path="/sports" element={<News key="sports" pagesize={this.pagesize} category="sports" />}/>
            <Route exact path="/technology" element={<News key="technology" pagesize={this.pagesize} category="technology" />}/>
            {/* <Route path="*" element={<NoPage />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
