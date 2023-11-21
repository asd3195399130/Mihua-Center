import { apiGet } from "./api";

//获取电影列表

export function getmovie(data) {
  return apiGet(
    "https://www.zzgoodqc.cn/index.php/index/Moves/getMovesList",
    data
  );
}

// 获取电影详情列表

export function getmoviedetail(id) {
  return apiGet(
    `https://www.zzgoodqc.cn/index.php/index/Moves/getDetalById/?id=${id}`
  );
}
