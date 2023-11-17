import axios from "axios";

axios.defaults.timeout = 5000;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export function apiGet(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function apiPost(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
}
