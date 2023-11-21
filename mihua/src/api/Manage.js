import { apiGet, apiPost } from "./api";

// 角色系统列表
export function systom(data) {
  return apiGet("https://www.zzgoodqc.cn/index.php/index/role/getroleslist", data);
}

//添加系统角色

export function addsystom(data) {
  return apiPost("https://www.zzgoodqc.cn/index.php/index/role/addroles", data);
}
// 更新系统角色

export function updatesystom(data) {
  return apiPost("https://www.zzgoodqc.cn/index.php/index/role/uproles", data);
}
//搜索
export function searchers(data) {
  return apiPost(
    "https://www.zzgoodqc.cn/index.php/index/role/getsearchroles",
    data
  );
}

// 通过id获取系统角色信息
export function getRole(id) {
  return apiGet(
    `https://www.zzgoodqc.cn/index.php/index/role/getrolesbyid?id=${id}`
  );
}

// 删除
export function getdel(id) {
  return apiGet(`https://www.zzgoodqc.cn/index.php/index/role/delroles?id=${id}`);
}

// 角色启用和停用

export function getstop(data) {
  return apiGet("https://www.zzgoodqc.cn/index.php/index/role/stoproles", data);
}
