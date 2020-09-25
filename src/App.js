import React from 'react';

import './App.css';
import SpendingSummary from "./spending-summary";
import Nav from "./nav";
import AddSpending from "./add-spending";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {

  return (
      <Router>
          <div className="App">
              <header>Spending Tracker</header>
              <Nav></Nav>
              <Switch>


                  <Route path={"/"} exact component={Home} />
                  <Route path={"/spending-summary"} exact component={SpendingSummary}/>

                  <Route path={"/add-spending"} exact component={AddSpending}/>
              </Switch>



          </div>
      </Router>
  );
}

function Home() {
    return (
        <div>
            Welcome to Spending Tracker by Yunlin
        </div>
    )
}

export default App;
