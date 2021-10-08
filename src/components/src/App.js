import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = ()=>{
  const apiKey = process.env.REACT_NEWS_API_KEY;
  const pageSize = 12;
  const [progress, setProgress] = useState(0)

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <LoadingBar />
          <Switch>
            <Route exact path="/">
              <News apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }

  export default App;