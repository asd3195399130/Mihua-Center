import { apiGet, apiPost } from "./api";

export function Codefun(data) {
  return apiGet("http://47.94.4.201/index.php/index/index/getcode", data);
}

export function loginFun(data) {
  return apiPost("http://47.94.4.201/index.php/index/index/login", data);
}
