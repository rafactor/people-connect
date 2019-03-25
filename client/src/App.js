import React, { Component } from "react";

import MainNav from "./components/MainNav"
import MainContent from "./components/MainContent"
import MainModal from "./components/MainModal"
import Login from "./views/login"
import Dashboard from "./views/dashboard";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import navItems from "./components/navItems.json"

class App extends Component {

  state = {
    window: {
      width: 0,
      height: 0
    },
    login: {
      method: ""
    },
    service: {
      type: ""
    },
    input: {
    },
    modal: {
      show: false,
      header: { icon: "fas fa-building", text: "Company" },
      footer: { abort: "cancel", process: "apply" }
    }
  };

  hideModal = () => {
    let modal = this.state.modal;
    modal.show = false;
    this.setState({ modal: modal });
  }
  showModal = () => {
    let modal = this.state.modal;
    modal.show = true;
    this.setState({ modal: modal });
  }

  changeLoginMethod = (method) => {
    let login = this.state.login;
    login.method = method;
    this.setState({ login: login });
  }

  changeServiceType = (type) => {
    let service = this.state.service;
    service.type = type;
    this.setState({ type: type });
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ window: { width: window.innerWidth, height: window.innerHeight } });
  }

  render() {
    return (

      <Container fluid={true}>
        <Row>
          <Router>
            <Route exact path="/"
              render={(props) => <MainNav {...props} window={this.state.window} items={navItems} showModal={this.showModal} />}
            />
          </Router>
          <MainContent window={this.state.window}>

            <Login method={this.state.login.method} changeMethod={this.changeLoginMethod} />
            <Dashboard showModal={this.showModal} />

          </MainContent>
          <MainModal
            show={this.state.modal.show}
            hideModal={this.hideModal}
            header={this.state.modal.header}
            footer={this.state.modal.footer}
            onProcess={""}
          >
          </MainModal>
        </Row>
      </Container>
    );
  }
}

export default App;
