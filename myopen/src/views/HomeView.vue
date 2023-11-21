<!--  -->
<template>
  <div class="">
    <div class="header">
      <h1>table</h1>
      <div class="headr-top">
        <h1>光与影</h1>
      </div>
      <div class="header-top-ls">
        <h1>少年的你</h1>
      </div>
      <div class="content">
        <div class="content-top">
          <div>
            <h1 style="float: left;">正在热映</h1>
            <a href="#" style="float: right; margin-right:5px ;margin-top: 10px;">
              更多
              <i class="el-icon-arrow-right"
                style="font-size: 19px; color: #6f6e73; font-weight: 600;margin-top:10px"></i>
            </a>
            <div style="clear:both"></div>
          </div>
          <ul>
            <li v-for="(item, index) in movie" :key="index" @click="specif(item.id)">
              <img :src="item.imgurl" alt="" width="94" height="105">
              <p>{{ item.name }}</p>
              <p>评分 {{ item.score }}</p>
            </li>
          </ul>
        </div>
        <div class="content-top-left">
          <div>
            <h1 style="float: left;">即将上映</h1>
            <a href="#" style="float: right; margin-right:5px ;margin-top: 10px;">
              更多
              <i class="el-icon-arrow-right"
                style="font-size: 19px; color: #6f6e73; font-weight: 600;margin-top:10px"></i>
            </a>
            <div style="clear:both"></div>
          </div>
          <ul>
            <li v-for="(item, index) in movie_id" :key="index" @click="specif(item.id)">
              <img :src="item.imgurl" alt="" width="94" height="105">
              <p>{{ item.name }}</p>
              <p>评分 {{ item.score }}</p>
            </li>
          </ul>
        </div>
        <div class="content-bottom">
          <div>
            <h1 style="float: left;">Top250</h1>
            <a href="#" style="float: right; margin-right:5px ;margin-top: 10px;">
              更多
              <i class="el-icon-arrow-right"
                style="font-size: 19px; color: #6f6e73; font-weight: 600;margin-top:10px"></i>
            </a>
            <div style="clear:both"></div>
          </div>
          <ul>
            <li v-for="(item, index) in movie_cl" :key="index" @click="specif(item.id)">
              <img :src="item.imgurl" alt="" width="94" height="105">
              <p>{{ item.name }}</p>
              <p>评分 {{ item.score }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getmovie } from "../api/http";
export default {
  data() {
    return {
      movie: [],
      movie_id: [],
      movie_cl: [],
    }
  },
  methods: {
    reading() {
      getmovie().then(res => {
        // console.log(res)
        this.movie = res.data.splice(0, 3);
        this.movie_id = res.data.splice(0, 3);
        this.movie_cl = res.data.splice(0, 3);
      })
    },
    specif(id) {
      // let id = item.id
      this.$router.push({ name: "DetailPage", params: { id: id } });
    }
  },
  created() {
    this.reading()

  },
  mounted() {

  }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.header {
  width: 100%;
  // height: 100px;
  // line-height: 50px;
  // background: red;

  .headr-top {
    // width: 100%;
    // height: 200px;
    background: #466083;
    // margin-left: 15px;
    margin: auto;
    text-align: left;
    padding-top: 10px;
    padding-left: 28px;
    padding-bottom: 10px;

    h1 {
      // font-size: 20px;
      color: #fff;
      font-weight: 400;
      font-family: "华文隶书";
    }
  }

  .header-top-ls {
    height: 100%;
    background: #f2f2f2;
    text-align: left;
    padding-top: 10px;
    padding-left: 28px;
    padding-bottom: 10px;

    h1 {
      color: #737373;
      font-weight: 400;
      font-family: "华文隶书";
    }
  }

  .content {
    width: 100%;
    height: 100%;
    background: #f2f2f2;

    .content-top {
      width: 100%;
      height: 100%;
      background: #f2f2f2;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

      ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      li {
        p {
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          font-family: "华文行楷";
          color: #6c6c6c
        }
      }

      h1 {
        text-align: left;
        padding-top: 10px;
        padding-left: 28px;
        padding-bottom: 10px;
        color: #737373;
        font-weight: 400;
        font-family: "华文隶书";
      }
    }

    .content-top-left {
      width: 100%;
      height: 100%;
      background: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      position: relative;
      top: 30px;

      // text-align: left;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      li {
        p {
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          font-family: "华文行楷";
          color: #6c6c6c
        }
      }

      h1 {
        text-align: left;
        padding-top: 10px;
        padding-left: 28px;
        padding-bottom: 10px;
        color: #737373;
        font-weight: 400;
        font-family: "华文隶书";
      }
    }

    .content-bottom {
      width: 100%;
      height: 100%;
      background: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      position: relative;
      top: 60px;

      // text-align: left;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      li {
        p {
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          font-family: "华文行楷";
          color: #6c6c6c
        }
      }

      h1 {
        text-align: left;
        padding-top: 10px;
        padding-left: 28px;
        padding-bottom: 10px;
        color: #737373;
        font-weight: 400;
        font-family: "华文隶书";
      }
    }
  }
}

a {
  text-decoration: none;
  color: #466083;
  cursor: pointer;
  font-family: "华文隶书";
}

ul {
  list-style: none;
}

h1 {
  font-family: "华文隶书";
}
</style>