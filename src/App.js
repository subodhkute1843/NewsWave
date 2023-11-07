import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { News } from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pagesize = 9;
  
  // const [progress, setProgress] = useState(0)
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pagesize={this.pagesize} category="general" />}/>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={this.pagesize} category="business" />}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} category="entertainment" />}/>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pagesize={this.pagesize} category="general" />}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={this.pagesize} category="health" />}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={this.pagesize} category="science" />}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={this.pagesize} category="sports" />}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={this.pagesize} category="technology" />}/>
            {/* <Route path="*" element={<NoPage />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
