import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register"
import "./App.scss";
import LandingPage from "./views/landing";
import MyServicesPage from "./views/myservices";
import NewService from "./views/newService"
import ServiceDetail from "./views/service";
import SearchPage from "./views/searchService";
import ResultsPage from "./views/searchResults";
import OfferPage from "./views/offer";
import RequestPage from "./views/requestService";
import ConfirmationPage from "./views/confirmation";



class App extends Component {


  render() {

    return (
      // <Home />
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/myservices" component={MyServicesPage} />
          <Route exact path="/newservice" component={NewService} />
          <Route exact path="/service" component={ServiceDetail} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/results" component={ResultsPage} />
          <Route exact path="/offer" component={OfferPage} />
          <Route exact path="/request" component={RequestPage} />
          <Route exact path="/confirmation" component={ConfirmationPage} />







          {/* <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
