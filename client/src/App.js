import React, { Component } from "react";

import MainModal from "./components/MainModal"
import MainNav from "./components/MainNav"
import MainContent from "./components/MainContent"
import Dashboard from "./views/dashboard"
import Landing from "./views/landing"
import Signin from "./views/signin"
import Signup from "./views/signup"
import Social from "./views/social"
import Market from "./views/market"
import Myshop from "./views/myshop"
import Myorders from "./views/orders"
import Service from "./views/service"

import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import API from "./utility/API.js";
import tableStructure from "./components/tableStructure.json"
import icons from "./components/icons.json"


class App extends Component {

  is_directed = true;
  navTabs = {
    brand: {
      icon: "user",
      variant: "outline-warning",
      text: "apptitle",
      to: "/landing"
    },
    right: [],
    left: [],
  }

  showModal = (state) => {
    this.setState({ showModal: state });
  }
  authUser = (state) => {
    this.setState({ isAuth: state });
  }
  setError = (err) => {
    this.setState({ error: err, showModal: true })
  }
  getValues = (pathname, id) => {
    if (pathname === "/myshop") {
      this.getValues("/orders")
      this.getValues("/myservices")
    }
    let apiMap = {
      "/market": API.getMarketServices,
      "/myservices": API.getMyServices,
      "/orders": API.getMyShopOrders,
      "/myorders": API.getMarketOrders,
      "/services/edit": API.getService
    };
    if (apiMap[pathname]) {
      apiMap[pathname](id).then((result) => {

        if (pathname === "/services/edit") {
          this.setState({ input: result.data })
        } else {
          this.state.renderTableData(pathname, result.data)
        }
      }).catch(err => {
        if (err.respons) this.setError(err.response.data.message);
      });
    }

  }

  validateData = (data, pathname) => {
    const valuesMap = {
      "/signin": ["email", "password"],
      "/signup": ["name", "email", "address", "language", "phone", "postalcode", "country", "province", "city", "password"],
      "/social/google": ["email"],
      "/social/facebook": ["email"],
      "/services/edit": ["title", "category", "language", "coverage", "price", "description"],
      "/services/add": ["title", "category", "language", "coverage", "price", "description"]
    };
    let obj = {};
    let error = "invalid ";
    let appendError = (key) => {
      (error.length === 8) ? error += key : error += " & " + key
    }
    for (let id in valuesMap[pathname]) {
      let key = valuesMap[pathname][id]
      let val = data[key];
      obj[key] = val || null;
      if (!val) { appendError(key) } else
        switch (key) {
          case "name":
            if (val.length < 3 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "email":
            if (val.split("@").length < 2) {
              appendError(key)
            }
            break;
          case "postalcode":
            if (val.length < 3 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "phone":
            if (val.length < 7 || isNaN(val)) {
              appendError(key)
            }
            break;
          case "address":
            if (val.length < 5 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "city":
            if (val.length < 4 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "province":
            if (val.length < 2 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "country":
            if (val.length < 2 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "category":
            if (val.length < 4 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "description":
            if (val.length < 5 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "resolution":
            if (val.length < 5 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "company":
            if (val.length < 3 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "role":
            if (val.length < 3 || !isNaN(val)) {
              appendError(key)
            }
            break;
          case "password":
            if (val.length < 3) {
              appendError(key)
            }
            break;
          case "oldpassword":
            // validate the case of renewing the password which has 
            // three fields; oldpassword, newpassword, confirmpassword:
            var oldpass = data["oldpassword"],
              newpass = data["newpassword"],
              conpass = data["confirmpassword"];
            if (oldpass.length < 3) {
              error += "invalid old password<br>";
            }
            if (newpass.length < 3) {
              error += "invalid new password<br>";
            }
            if (conpass.length < 3) {
              error += "invalid confirm password<br>";
            }
            if (conpass !== newpass) {
              error += "Please confirm password<br>";
            }
            break;
          default:
            break;
        }
    }

    this.setState({ input: obj });

    if (error.length > 8) {
      this.setError(error)
      return false;
    }
    return true;
  }
  interval_id = 0;
  check_isAuth = () => {
    if (this.state.isAuth) {
      API.isAuth().then(result => {
        if (!result.data.isAuth) {
          this.authUser(false)
        }
      }).catch(err => {
        console.log("errr")
        this.authUser(false)
        this.setError(err.response.data)
      })
    }

  }

  state = {
    AppLanguage: "en",
    showModal: false,
    direction: "/",
    window: {
      width: 0,
      height: 0
    },
    isAuth: false,
    data: {},
    input: {},
    user: { name: "" },
    error: "",
    modal: {
      show: false,
      header: { icon: "fas fa-building", text: "Company" },
      footer: { abort: "cancel", process: "apply" }
    },
    resetInput: () => {
      this.setState({
        input: {}
      });
    },
    redirect: (direction) => {
      this.is_directed = false;
      this.setState({ direction: direction });
    },
    check_redirect: () => {
      if (!this.is_directed) {
        this.is_directed = true;
        return (<Redirect to={this.state.direction} />)
      }
      return (<></>)
    },
    changeLanguage: (value) => {
      this.setState({
        AppLanguage: value
      });
    },
    onChangeHandler: (event) => {
      const { name, value } = event.target;
      let input = this.state.input;
      input[name] = value;
      this.setState({
        input: input
      });
    },

    dashHeader: (pathname) => {
      let res = {
        left: [
          {
            type: "home",
            variant: (pathname === "/dashboard" ? "outline-info" : "outline-warning"),
            to: "/dashboard",
            active: (pathname === "/dashboard"),
            text: (pathname === "/dashboard" ? "landing" : " "),
            title: "landing"
          },
          {
            type: "market",
            variant: (pathname === "/market" ? "outline-info" : "outline-warning"),
            to: "/market",
            active: (pathname === "/market"),
            text: (pathname === "/market" ? "seemarket" : " "),
            title: "seemarket"
          },
          {
            type: "order",
            variant: (pathname === "/myorders" ? "outline-info" : "outline-warning"),
            to: "/myorders",
            active: (pathname === "/myorders"),
            text: (pathname === "/myorders" ? "myorders" : " "),
            title: "myorders"
          },
          {
            type: "store",
            variant: (pathname === "/myshop" ? "outline-info" : "outline-warning"),
            to: "/myshop",
            active: (pathname === "/myshop"),
            text: (pathname === "/myshop" ? "myshop" : " "),
            title: "myshop"

          },
          {
            type: "plus",
            variant: (pathname === "/services/add" ? "outline-info" : "outline-warning"),
            to: "/services/add",
            active: (pathname === "/services/add"),
            text: (pathname === "/services/add" ? "addservice" : " "),
            title: "addservice"
          }
        ]
      }
      const refresh_paths = ["/market", "/myshop", "/myorders", "/services/edit"]

      if (refresh_paths.indexOf(pathname) !== -1)
        res.right = [{
          type: "refresh",
          text: " ",
          variant: "info",
          onClick: () => { this.getValues(pathname) },
        }]

      return res
    },
    NavTabs: (pathname) => {
      pathname = pathname.split("?")[0]
      if (!this.state.isAuth) {
        this.navTabs.right = [{}]
        this.navTabs.left = [
          {
            icon: "home",
            text: "landing",
            to: "/landing"
          },
          {
            icon: "signin",
            text: "signin",
            to: "/signin"
          },
          {
            icon: "signup",
            text: "signup",
            to: "/signup"
          },

        ]
      } else {
        this.navTabs.right = []
        this.navTabs.left = [
          {
            icon: "home",
            text: "landing",
            to: "/dashboard",
          },
          {
            icon: "market",
            text: "seemarket",
            to: "/market",
          },
          {
            icon: "order",
            text: "myorders",
            to: "/myorders"
          },
          {
            icon: "store",
            text: "myshop",
            to: "/myshop"
          },
          {
            icon: "signout",
            text: "signout",
            to: "",
            onClick: () => this.state.submit(pathname, "signout"),
            className: "bg-danger text-light"
          }
        ]
      }


      return this.navTabs
    },

    renderTableData: (pathname, data) => {
      let { submit } = this.state;
      let tdata = {
        thead: [],
        tbody: []
      };

      let fields = tableStructure[pathname];

      // building table header icons
      fields.forEach((field, i) => {
        let icon = icons[field.key.toLowerCase()];
        icon.text = (field.text) ? field.text.toLowerCase() : "" || icon.text.toLowerCase();
        tdata.thead.push(icon);
      })
      if (!data) data = []
      data.forEach((datum, i) => {
        datum.hash = i + 1;
        let row = [];
        fields.forEach((field) => {
          const { key, btn_only, buttons } = field;

          let obj = {
            text: "",
            span: "1",
            className: "px-2"
          }
          if (btn_only) {//to show buttons only
            if (buttons) {
              obj.buttons = [];
              buttons.forEach(button => {
                button.onClick = () => submit(pathname, button.cmd, datum._id)
                obj.buttons.push(button);
              })
            }
          } else {//to show text only
            obj.text = datum[key.toLowerCase()]
          }

          row.push(obj);
        });
        tdata.tbody.push(row)
      })

      let values = this.state.data;
      values[pathname] = tdata;
      this.setState({ data: values });
    },
    submit: (pathname = "", cmd = "", id = "") => {//subitting the input fields one clicking on the action button

      console.log(pathname, cmd, id)

      if (cmd === "signout") {
        pathname = "/signout"
      }

      const data = this.state.input;
      let isValid = this.validateData(data, pathname)

      if (isValid) {
        this.state.resetInput();
        switch (pathname) {
          case "/signin":
            API.signin(data).then((result) => {
              this.setState({ user: result.data })
              this.authUser(true);
              this.getValues("/market")
              this.getValues("/myorders")
              this.getValues("/myshop")
            }).catch(err => {
              this.setError("Fail To sign-in");
            });
            break;

          case "/signup":
            API.signup(data).then(() => {
            }).catch(err => {
              this.setError("Fail To sign-up");
            });
            break;

          case "/signout":
            API.signout().then(() => {
              this.authUser(false);
            }).catch(err => {
              this.setError("Fail To sign-out");
            });
            break;

          case "/services/add":
            API.addService(data).then(() => {
              this.getValues("/myservices");
              this.setError("you've successfully added the service!");
            }).catch(err => {
              this.setError(err.response.data.message);
            });
            break;
          case "/services/edit":
            API.editService(id, data).then(() => {
              this.getValues("/myservices");
              this.setError("you've successfully edited the service!");
            }).catch(err => {
              this.setError(err.response.data.message);
            });
            break;

          case "/market":
            if (cmd === "buy") {
              API.orderMarketService(id).then(() => {
                this.getValues("/myorders");
                this.setError("you've successfully ordered the service!");
              }).catch(err => {
                this.setError(err.response.data.message);
              });
            }
            break;
          case "/myorders":
            if (cmd === "cancel") {
              API.cancelMarketOrder(id).then(() => {
                this.getValues("/myorders");
                this.setError("you've successfully cancelled the order!");
              }).catch(err => {
                this.setError(err.response.data.message);
              });
            }
            break;
          case "/orders":
            if (cmd === "confirm") {
              API.confirmMyShopOrder(id).then(() => {
                this.getValues("/orders");
                this.setError("you've successfully confirmed the order!");
              }).catch(err => {
                this.setError(err.response.data.message);
              });
            }
            break;
          case "/myservices":
            if (cmd === "edit") {
              this.getValues("/services/edit", id);
              this.state.redirect(`/services/edit?id=${id}`);
            }
            if (cmd === "delete") {
              API.deleteService(id).then(() => {
                this.getValues("/myservices");
                this.setError("you've successfully deleted the service!");
              }).catch(err => {
                this.setError(err.response.data.message);
              });
            }
            break;
          case "/social/google":
            this.setError("This feature isn't available at this time!")
            this.state.redirect("/landing");
            break;
          case "/social/facebook":
            this.setError("This feature isn't available at this time!")
            this.state.redirect("/landing");
            break;
          default:
            this.setError("Opps, Your distination is not available!")
            this.state.redirect("/landing");
            break;
        }
      }

    },
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.interval_id = setInterval(this.check_isAuth, 5000)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    clearInterval(this.interval_id)
  }

  updateWindowDimensions = () => {
    this.setState({ window: { width: window.innerWidth, height: window.innerHeight } });
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Router>
            <Switch>
              <MainNav state={this.state} />
            </Switch>
            <MainContent window={this.state.window}>
              <Switch>
                <Route exact path="/landing" render={(props) => (<Landing {...props} state={this.state} />)} />
                <Route exact path="/signin" render={(props) => (<Signin {...props} state={this.state} />)} />
                <Route exact path="/signup" render={(props) => (<Signup {...props} state={this.state} />)} />
                <Route exact path="/social/:social_type" render={(props) => (<Social {...props} state={this.state} />)} />
                <Route exact path="/dashboard" render={(props) => (<Dashboard {...props} state={this.state} />)} />
                <Route exact path="/market" render={(props) => (<Market {...props} state={this.state} />)} />
                <Route exact path="/myshop" render={(props) => (<Myshop {...props} state={this.state} />)} />
                <Route exact path="/services/:action" render={(props) => (<Service {...props} state={this.state} />)} />
                <Route exact path="/myorders" render={(props) => (<Myorders {...props} state={this.state} />)} />
                <Redirect to="/landing" />
              </Switch>

            </MainContent>
          </Router>
        </Row>
        <MainModal
          isShow={this.state.showModal}
          hide={() => { this.showModal(false) }}
          text={this.state.error}
        />
      </Container>
    );
  }
}

export default App;
