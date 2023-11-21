import { apiGet, apiPost } from "./api";

export function Codefun(data) {
  return apiGet("https://www.zzgoodqc.cn/index.php/index/index/getcode", data);
}

export function loginFun(data) {
  return apiPost("https://www.zzgoodqc.cn/index.php/index/index/login", data);
}
