import axios from "axios";

var API = {

  isAuth: () => axios.post("/auth/isauth"),
  signin: (data) => axios.post("/auth/signin", data),
  signout: () => axios.post("/auth/signout/"),
  signup: (data) => axios.post("/auth/signup/", data),

  getMyServices: () => axios.get("/api/services/myshop"),
  addService: (data) => axios.post("/api/services/myshop", data),
  getService: (id) => axios.get("/api/services/myshop/" + id),
  editService: (id, data) => axios.put("/api/services/myshop/" + id, data),
  deleteService: (id) => axios.delete("/api/services/myshop/" + id),

  getMarketOrders: () => axios.get("/api/orders/market"),
  cancelMarketOrder: (id) => axios.delete("/api/orders/market/" + id),

  getMarketServices: () => axios.get("/api/services/market"),
  orderMarketService: (id) => axios.post("/api/services/market/" + id),

  getMyShopOrders: () => axios.get("/api/orders/myshop"),
  confirmMyShopOrder: (id) => axios.put("/api/orders/myshop/" + id),

  getProfile: () => axios.get("/api/myaccount/"),
  editProfile: (data) => axios.put("/api/myaccount/", data),
}

export default API;
