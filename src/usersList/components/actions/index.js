import axios from "axios";
const API = "https://reqres.in/api";

export const getUsers = async () => {
  let users = [];
  try {
    let resp = await axios.get(`${API}/users`);
    users = resp.data.data;
  } catch (error) {
    console.log("error", error);
  }
  return { type: "SET_USERS", payload: users };
};

export const getProfile = async (id) => {
  let user = {};
  try {
    let resp = await axios.get(`${API}/users/${id}`);
    user = resp.data.data;
  } catch (error) {
    console.log("error", error);
  }
  return { type: "GET_PROFILE", payload: user };
};

export const clearProfile = () => {
  return { type: "CLEAR_PROFILE" };
};
