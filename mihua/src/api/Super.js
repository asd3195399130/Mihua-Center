import { apiGet, apiPost } from "./api";

// 获取企业数据
export function gainsuper(data) {
  return apiGet(
    "https://www.zzgoodqc.cn/index.php/index/call/getsuperes",
    data
  );
}

//添加企业数据
export function Addsuper(data) {
  return apiPost("https://www.zzgoodqc.cn/index.php/index/call/addsuper", data);
}

//查看详情超级企业接口
export function viewsuper(id) {
  return apiPost(
    `https://www.zzgoodqc.cn/index.php/index/call/getsuperbyid/?id=${id}`
  );
}
// 修改超级企业状态
export function upsuper(data) {
  return apiPost(
    "https://www.zzgoodqc.cn/index.php/index/call/upsuperstatus",
    data
  );
}
//名称搜索接口(模糊搜索)
export function searcher(data) {
  return apiPost(
    "https://www.zzgoodqc.cn/index.php/index/call/getsearches",
    data
  );
}
