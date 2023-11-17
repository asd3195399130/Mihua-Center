<!--  -->
<template>
  <div class="">
    <!-- <h2>6666</h2> -->
    <div class="middle">
      <div class="middle-hea">
        <h1>数据总览</h1>
        <span>插看详情</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPlJREFUOE+lU9EVwiAMvHQR6yY4ia0dxDpIxU5i3MRJjC8IPKDg8z356mvI5e5yEP489K3fWOm1ziM9W/c2AK7phTMIBoIVwC42d7iUYBmAsaJNFoSRR+J0agQGHjzRLdRygEUsTzS26EaQhEkEMItYdFg3kxeZ0eEWqDsQgeUTHXRQCjDzRHM5PTR4Wc5MHRaYZgzCT+fFC24D/uj3LtY/rFjZOgCvbQgMzCJDwaQH4cgn2nsGUVaVQc391NymBFT2rHJSY8Mmth4U7jZXeZV7amgtSJpCDVIW3yQD2apbUTZqGgQPz8TFuRayXx5TX4YrlfcV4JeX/gYH8JcRyTxy/AAAAABJRU5ErkJggg=="
          alt="" />
      </div>
      <div class="content-data">
        <div class="data">
          <div class="cata-top">
            <img src="../assets/微信截图_20231116152416.png" alt="" />
            <div class="data-tat">
              <div>
                <span style="font-weight: 600; font-size: 21px">当前线路并发数</span>
                <span style="margin-left: 50px; font-size: 25px">0</span>
              </div>
              <div>
                <span>今日最高线路并发数</span>
                <span style="margin-left: 50px; font-size: 15px">1</span>
              </div>
              <div>
                <span>历史最高线路并发数</span>
                <span style="margin-left: 50px; font-size: 15px">1291</span>
              </div>
            </div>
            <div class="data-cot">
              <ul>
                <li v-for="item in data_left" :key="item.id">
                  {{ item.title }}
                  <span style="float: right">{{ item.num }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="data-right">
          <div class="data-right-top">
            <img src="../assets/微信截图_20231116152440.png" alt="" />
            <div class="data-right-tat">
              <div>
                <span style="font-weight: 500; font-size: 21px">当前通话并发数</span>

                <span style="margin-left: 50px; font-size: 25px">3</span>
                <span class="text">（电路2 网络1）</span>
              </div>
              <div>
                <span>今日最高通话并发数</span>
                <span style="margin-left: 50px; font-size: 15px">8</span>
                <span class="text">（电路6 网络2）</span>
              </div>
              <div>
                <span>历史最高通话并发数</span>
                <span style="margin-left: 50px; font-size: 15px">2151</span>
                <span class="text">（电路72 网络2079）</span>
              </div>
            </div>
            <div class="data-right-text">
              <ul>
                <li v-for="item in data_right" :key="item.id">
                  {{ item.txt }}
                  <span style="float: right">{{ item.num }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-mi">
          <h1>并发趋势</h1>
        </div>
        <div class="footer-bot">
          <el-button type="primary" @click="switchcomponent('HouseDate')">小时制</el-button>
          <el-button type="primary" @click="switchcomponent('HouseChart')"> 半小时制 </el-button>
          <div>
            <keep-alive>
              <component :is="componentId"></component>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HouseDate from "./HouseDate.vue";
import HouseChart from "./HouseChart.vue";
export default {
  components: {
    HouseDate,
    HouseChart
  },
  data() {
    return {
      data_left: [
        {
          id: 1,
          title: "docker1",
          num: 0,
        },
        {
          id: 2,
          title: "develop",
          num: 0,
        },
        {
          id: 3,
          title: "sdet0320",
          num: 0,
        },
        {
          id: 4,
          title: "0418",
          num: 0,
        },
        {
          id: 5,
          title: "shengy618",
          num: 0,
        },
      ],
      data_right: [
        {
          id: 1,
          txt: "docker1",
          num: 3,
        },
        {
          id: 2,
          txt: "develop",
          num: 0,
        },
        {
          id: 3,
          txt: "sdet0320",
          num: 0,
        },
        {
          id: 4,
          txt: "0418",
          num: 0,
        },
        {
          id: 5,
          txt: "shengy618",
          num: 0,
        },
      ],
      componentId: "HouseDate",
    };
  },
  methods: {
    switchcomponent(component) {
      this.componentId = component;
    }
  },
  created() { },
  mounted() { },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  list-style: none;
}

.middle {
  position: relative;
  top: 50px;
  width: 96%;
  height: 100%;
  margin: auto;
  padding-top: 34px;
  margin-top: 50px;

  .middle-hea {
    width: 100%;
    display: flex;
    align-items: flex-end;

    span {
      position: relative;
      top: -2px;
      left: 5px;
      color: #409eff;
      font-size: 14px;
    }

    img {
      position: relative;
      top: 1px;
      left: 10px;
    }
  }

  .content-data {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border: none;
    position: relative;
    top: 10px;
    display: flex;
    justify-content: space-between;

    .data {
      width: 49%;
      height: 100%;
      // border: 1px solid black;
      text-align: left;

      .data-cot {
        width: 100%;
        height: 148px;

        ul {
          width: 100%;
          height: 148px;

          li {
            position: relative;
            left: 20px;
            height: 25px;
            width: 93%;
            line-height: 25px;
            color: #cfcfcf;

            span {
              color: #000;
            }
          }
        }
      }

      .cata-top {
        width: 100%;
        height: 174px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        .data-tat {
          position: relative;
          bottom: 65px;
          left: 160px;
        }

        img {
          width: 100px;
          height: 100px;
          position: relative;
          top: 30px;
          left: 50px;
        }
      }
    }

    .data-right {
      width: 49%;
      height: 100%;
      text-align: left;

      .data-right-top {
        width: 100%;
        height: 174px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        .data-right-tat {
          position: relative;
          bottom: 65px;
          left: 160px;

          .text {
            position: relative;
            left: 20px;
            color: #cfcfcf;
          }
        }

        img {
          width: 100px;
          height: 100px;
          position: relative;
          top: 30px;
          left: 50px;
        }

        .data-right-text {
          width: 100%;
          height: 148px;

          ul {
            width: 100%;
            height: 148px;

            li {
              position: relative;
              left: 20px;
              height: 25px;
              width: 93%;
              line-height: 25px;
              color: #cfcfcf;

              span {
                color: #000;
              }
            }
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    border: none;
    position: relative;
    top: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    .footer-mi {
      text-align: left;
    }

    .footer-bot {
      width: 100%;
      height: 100%;
      border: 1px solid blue;
      border: none;
      background-color: #ffffff;
      margin-top: 20px;
    }
  }
}
</style>