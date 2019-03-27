import axios from "axios";

var API = {
  login: function (loginData) {
    return axios.post("/api/login", loginData);
  },
  logout: function () {
    return axios.post("/api/logout/");
  },
  register: function (data) {
    return axios.post("/api/client/", data);
  },
  createService: function (data) {
    return axios.post("/api/services/", data);
  },
  deleteService: function (id) {
    return axios.delete("/api/services/" + id);
  },
  getService: function (id) {
    return axios.get("/api/services/" + id);
  },
  updateService: function (id, data) {
    return axios.put("/api/services/" + id, data);
  },
  requestService: function (id) {
    return axios.patch("/api/services/" + id);
  },
  marketServices: function () {
    return axios.get("/api/services/");
  },
  myServices: function () {
    return axios.get("/api/myservice/");
  },
  myOrders: function () {
    return axios.get("/api/myorders/");
  }
};

export default API;
