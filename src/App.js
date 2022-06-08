import { createBrowserHistory } from "history";
 import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

// import { BrowserRouter, Route } from 'react-router-dom';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Router_test from "./Email_Task/Router_test";
import Email_01_check from "./Email_Task/Email_01_check";
import Emailset__local from "./Email_Task/Sign_in";
import Home from "./FlipCard/Home";




import Jeen_url from "./FlipCard/Jeen_url";
import Belt_url from "./FlipCard/Belt_url";
import T_shirt_url_change from "./FlipCard/T_shirt_url_change";
import Add_to_card from "./FlipCard/Add_to_card";
import process_page from "./FlipCard/process_page";
import Buy_success from "./FlipCard/Buy_success";
import Jean_detail from "./FlipCard/Jean_detail";
import T_shirts_details from "./FlipCard/T_shirts_details";
import Belts_details from "./FlipCard/Belts_details";



const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Route path='/' component={<Login history={history} />} />

          <Route path='/welcome' component={<Welcome history={history} />} /> */}

          <Route exact path="/" component={Emailset__local} />

          <Route exact path="/Email_01_check" component={Email_01_check} />
          <Route exact path="/Home" component={Home} />

          <Route exact path="/Jeen_url" component={Jeen_url} />
          <Route
            exact
            path="/T_shirt_url_change"
            component={T_shirt_url_change}
          />
          <Route exact path="/Belt_url" component={Belt_url} />
          <Route exact path ='/Add_to_card' component={Add_to_card}/>
          <Route exact path='/process_page' component={process_page}/>
          <Route exact path="/Buy_success" component={Buy_success}/>
          <Route exact path='/Jean_detail' component={Jean_detail}/>
          <Route exact path='/T_shirts_details' component={T_shirts_details}/>
          <Route exact path ='/Belts_details' component={Belts_details}/>
        </Router>
      </div>
    );
  }
}

export default App;
