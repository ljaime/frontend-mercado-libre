import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/index";
import Detail from "./containers/Detail/index";
import Search from "./containers/Search/index";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <div>
        <Switch>
          <Route path="/items/:id" children={<Detail />} />
          <Route path="/items" children={<Search />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
