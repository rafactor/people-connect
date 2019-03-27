import React, { Component } from "react";

import MainNav from "./components/MainNav"
import MainContent from "./components/MainContent"
import MainModal from "./components/MainModal"
import Login from "./views/login/index"
import Dashboard from "./views/dashboard";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./components/API.js";

class App extends Component {

  state = {
    window: {
      width: 0,
      height: 0
    },
    login: {
      method: "",
      isAuth: false
    },
    service: {
      type: ""
    },
    data: {

    },
    input: {
    },
    error: "",
    modal: {
      show: false,
      header: { icon: "fas fa-building", text: "Company" },
      footer: { abort: "cancel", process: "apply" }
    }
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    let input = this.state.input;
    input[name] = value;
    this.setState({
      input: input
    });
    console.log(this.state.input)
  };

  resetInput = () => {
    this.setState({
      input: {}
    });
  }

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
  authUser = (state) => {
    let login = this.state.login;
    login.isAuth = state;
    this.setState({ login: login });
  }

  changeLoginMethod = (method) => {
    let login = this.state.login;
    login.method = method;
    this.setState({ login: login });
    this.resetInput();
  }

  changeServiceType = (type) => {
    let service = this.state.service;
    service.type = type;
    this.setState({ service: service });
  }

  setError = (err) => {
    this.setState({ error: err })
  }

  requestHandler = (reqType, id) => {
    const data = this.state.input;
    this.resetInput();
    switch (reqType) {
      case "login":
        API.login(data).then(res => {
          this.setError("");
          this.authUser(true);
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "logout":
        API.logout().then(res => {
          this.setError("");
          this.authUser(false);
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "register":
        API.register(data).then(res => {
          this.setError("");
          this.changeLoginMethod("login")
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "createService":
        API.createService(data).then(res => {
          this.setError("");
          this.changeServiceType("myServices");
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "deleteService":
        API.deleteService(id).then(res => {
          this.setError("");
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "getService":
        API.getService(id).then(res => {
          let stateData = this.state.data;
          stateData["getService"] = res.data;
          this.setState({ data: stateData });
          this.changeServiceType("requestService");
          this.setError("");
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "updateService":
        API.updateService(id, data).then(res => {
          this.setState({ data: data });
          this.changeServiceType("myServices");

          this.setError("");
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "requestService":
        API.requestService(id).then(res => {
          this.changeServiceType("market");

          this.setError("");
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "myServices":
        API.myServices().then(res => {
          let stateData = this.state.data;
          stateData["myServices"] = res.data;
          this.setState({ data: stateData });
          this.changeServiceType("myServices");

          this.setError("");
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
      case "myOrders":
        API.myOrders().then(res => {
          let stateData = this.state.data;
          stateData["myOrders"] = res.data;
          this.setState({ data: stateData });
          this.changeServiceType("myOrders");
          this.setError("");
        })
          .catch(err => {
            console.log(err)
            this.setError(err);
          });
        break;
    }
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

          <MainNav window={this.state.window} showModal={this.showModal} />
          <MainContent window={this.state.window}>
            {
              (this.state.login.isAuth) ?
                <Dashboard error={this.state.error} input={this.state.input} onChange={this.onChangeHandler} type={this.state.service.type} changeType={this.changeServiceType} /> :
                <Login error={this.state.error} input={this.state.input} onChange={this.onChangeHandler} method={this.state.login.method} changeMethod={this.changeLoginMethod} authUser={this.authUser} />
            }

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
