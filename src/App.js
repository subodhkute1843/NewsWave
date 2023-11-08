import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
const App = () => {

  const pagesize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  
  // state = {
  //   progress: 0
  // }

  const [progress, setProgress] = useState(0)

  // setProgress = (progress) => {
  //   // this.setState({progress: progress})
  //   setProgress(progress)
  // }
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} category="general" />}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={pagesize} category="business" />}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pagesize} category="entertainment" />}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} category="general" />}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pagesize} category="health" />}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pagesize} category="science" />}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={pagesize} category="sports" />}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pagesize} category="technology" />}/>
          {/* <Route path="*" element={<NoPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
