import axios from "axios";

const AUTH_HEADER = "Authorization";
axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const login = async credentials =>
  axios.post("/users/login", credentials);

export const logout = async () => {
  setHeader();
  return axios.get("/users/logout");
};

export const forgotPassword = async email =>
  axios.post("/users/forgot-password", email);

export const resetPassword = async (password, resetToken) =>
  axios.post(`/users/reset-password?reset_token=${resetToken}`, password);

export const creationConfirmation = async confirmationToken =>
  axios.get(
    `/users/creation-confirmation?confirmation_token=${confirmationToken}`
  );

export const createUser = async user => axios.post("/users", user);

export const getUserCredits = async () => {
  setHeader();
  return axios.get("/users/credits");
};

export const acquireCredits = async creditsQuantity => {
  setHeader();
  return axios.post("/transactions/acquire-credits", creditsQuantity);
};

export const getIngredients = async () => {
  setHeader();
  return axios.get("/ingredients");
};

export const addIngredient = async ingredient => {
  setHeader();
  return axios.post("/ingredients", ingredient);
};

export const updateIngredient = async ingredient => {
  setHeader();
  return axios.put("/ingredients", ingredient);
};

export const removeIngredient = async ingredient => {
  setHeader();
  return axios.delete("/ingredients", { data: ingredient });
};

export const getMenu = async day => {
  setHeader();
  return axios.get(`/menu?day=${day}`);
};

export const addMenu = async menu => {
  setHeader();
  return axios.post("/menu", menu);
};

export const deleteMenu = async id => {
  setHeader();
  return axios.delete(`/menu/${id}`);
};

export const updateMenu = async (menu, id) => {
  setHeader();
  return axios.put(`/menu/${id}`, menu);
};

export const setHeader = () =>
  (axios.defaults.headers.common[AUTH_HEADER] = `Bearer ${localStorage.getItem(
    "token"
  )}`);
