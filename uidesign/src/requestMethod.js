import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ4YzEwYTA5NTkzNzRiMGIxODc1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDY0MDY0MiwiZXhwIjoxNjc0ODk5ODQyfQ.mUGBmCosclCboC6WKlg75DiTlsWfPbKY6wkadB--fhg";
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  //   .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
