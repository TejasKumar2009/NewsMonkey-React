import React, { useState } from "react";
import { Switch, Route, Redirect, useLocation, useHistory } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

const App = () => {
  const apiKey = process.env.REACT_NEWS_API_KEY;
  const pageSize = 20;
  const [progress, setProgress] = useState(0);
  const [searchNews, setSearchNews] = useState();
  const history = useHistory();
  const location = useLocation();
console.log(searchNews)
  return (
    <>
      <Navbar
        searchNews={{ searchNews: searchNews, setSearchNews: setSearchNews }}
      />
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <LoadingBar />
      <Switch>
        <Route exact path="/top-headlines/general">
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key="general"
            pageSize={pageSize}
            country="in"
            category="general"
          />
        </Route>
        <Route exact path="/top-headlines/business">
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key="business"
            pageSize={pageSize}
            country="in"
            category="business"
          />
        </Route>
        <Route exact path="/top-headlines/entertainment">
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key="entertainment"
            pageSize={pageSize}
            country="in"
            category="entertainment"
          />
        </Route>
        <Route exact path="/top-headlines/health">
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key="health"
            pageSize={pageSize}
            country="in"
            category="health"
          />
        </Route>
        <Route exact path="/top-headlines/science">
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key="science"
            pageSize={pageSize}
            country="in"
            category="science"
          />
        </Route>
        <Route exact path="/top-headlines/sports">
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key="sports"
            pageSize={pageSize}
            country="in"
            category="sports"
          />
        </Route>
        <Route exact path="/top-headlines/technology">
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key="technology"
            pageSize={pageSize}
            country="in"
            category="technology"
          />
        </Route>
        <Route exact path="/search">
        {/* <Route exact path="/search"> */}
          <News
            searchNews={{
              searchNews: searchNews,
              setSearchNews: setSearchNews,
            }}
            apiKey={apiKey}
            setProgress={setProgress}
            key={searchNews}
            pageSize={pageSize}
            country="in"
          />
        </Route>
        {location.pathname === "/" ? (
          <Redirect to="/top-headlines/general" />
        ) : null}
        
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
