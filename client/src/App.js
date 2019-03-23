import React, { Component } from "react";
//import "./App.scss";
//import 'materialize-css/dist/css/materialize.min.css'
//import MainContainer from "./components/MainContainer"
import MainNav from "./components/MainNav"
import MainContent from "./components/MainContent"
import DashCard from "./components/DashCard"
import MainModal from "./components/MainModal"
import { Container, Row, Button } from 'react-bootstrap';

class App extends Component {

  state = {
    window: {
      width: 0,
      height: 0
    },
    modal: {
      show: false,
    }
  };

  hideModal = () => {
    this.setState({ modal: { show: false } });
  }

  showModal = () => {
    this.setState({ modal: { show: true } });
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
          <MainNav window={this.state.window} showModal={this.showModal}>
          </MainNav>
          <MainContent window={this.state.window}>
            <DashCard icon={"fas fa-building"} title={"Company"}>
            </DashCard>
            <DashCard icon={"fas fa-headset"} title={"Services"}>
            </DashCard>
          </MainContent>
          <MainModal show={this.state.modal.show} hideModal={this.hideModal}>
          </MainModal>
        </Row>
      </Container>
    );
  }
}

export default App;
