import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const handleToken = (token) => {
  return async (dispatch, getState) => {
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};
