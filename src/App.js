import "./App.css";
import React, { useState } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContext } from "./Components/AppContext";
import NavBar from "./Components/NavBar/NavBar";
import { trailer } from "./Config/constants";
import axios from "./Axios";
import Landing from "./Components/Landing";
import TvShows from "./Components/TvShows";
import Movies from "./Components/Movies";
import Result from "./Components/SearchResult/Result";

function App() {
  const [videoId, setVideoId] = useState(null);
  const [detail, setDetail] = useState(null);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleTrailer = (id) => {
    axios.get(`movie/${id}` + trailer).then((res) => {
      if (res.data.results.length !== 0) {
        setVideoId(res.data.results[0].key);
      } else {
        if (res.data.success === false) {
        }
        setVideoId(null, console.log("null:", videoId));
      }
    });
  };
  const providerValue = {
    videoId,
    opts,
    detail,
    setDetail,
    setVideoId,
    handleTrailer,
  };

  return (
    <div className="App">
      <Router>
        <AppContext.Provider value={providerValue}>
          <NavBar value={providerValue} />

          <Switch>
            <Route exact path="/tvshows">
              <TvShows />
            </Route>
            <Route component={Movies} exact path="/movies" />

            <Route exact path={"/search"}>
              {console.log("Search Query")}
              <Result value={providerValue} />
            </Route>
            <Route exact path="/">
              {/* <AnotherComponent /> */}
              <Landing />
            </Route>
            {/*<Route exactly component={screen} path="/screen" />*/}
          </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
