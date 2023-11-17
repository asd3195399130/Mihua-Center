<!--  -->
<template>
  <div class="">
    <div class="header">
      <div class="header-op">
        <el-dropdown>
          <span class="el-dropdown-link">
            全部省份<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>江苏</el-dropdown-item>
            <el-dropdown-item>上海</el-dropdown-item>
            <el-dropdown-item>浙江</el-dropdown-item>
            <el-dropdown-item disabled>安徽</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header-de">
        <div class="header-title" v-for="item in data_lef" :key="item.id">
          <h1>{{ item.name }}</h1>
          <div class="data-left" style="float: left;">
            <ul>
              <li v-for="item in item.title" :key="item.id">
                <span class="title">{{ item.tit }}</span>
                <span>{{ item.num }}</span>
              </li>
            </ul>
          </div>
          <div class="data-right" style="float: right;">
            <ul>
              <li v-for="item in item.title2" :key="item.id">
                <span class="title">{{ item.name }}</span>
                <span>{{ item.sum }}</span>
                <span class="title" style="padding-right: 20px;">{{ item.span }}</span>
              </li>
            </ul>
          </div>
          <div style="clear: both;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_lef: [
        {
          id: 1,
          name: '江苏',
          title: [
            {
              id: 1,
              tit: '当前通话并发数',
              num: 0
            }, {
              id: 2,
              tit: '今日最高通话并发数',
              num: 0
            }, {
              id: 3,
              tit: '历史最高通话并发数',
              num: 0
            }
          ],
          title2: [
            {
              id: 1,
              name: "当前线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }, {
              id: 2,
              name: "今日最高线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }, {
              id: 3,
              name: "历史最高线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }
          ]
        }, {
          id: 2,
          name: '上海',
          title: [
            {
              id: 1,
              tit: '当前通话并发数',
              num: 0
            }, {
              id: 2,
              tit: '今日最高通话并发数',
              num: 0
            }, {
              id: 3,
              tit: '历史最高通话并发数',
              num: 0
            }
          ],
          title2: [
            {
              id: 1,
              name: "当前线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }, {
              id: 2,
              name: "今日最高线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }, {
              id: 3,
              name: "历史最高线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }
          ]
        }, {
          id: 3,
          name: '浙江',
          title: [
            {
              id: 1,
              tit: '当前通话并发数',
              num: 0
            }, {
              id: 2,
              tit: '今日最高通话并发数',
              num: 0
            }, {
              id: 3,
              tit: '历史最高通话并发数',
              num: 0
            }
          ],
          title2: [
            {
              id: 1,
              name: "当前线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }, {
              id: 2,
              name: "今日最高线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }, {
              id: 3,
              name: "历史最高线路并发数",
              sum: 0,
              span: "电路0 网络0"
            }
          ]
        }
      ]
    };
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

.header {
  position: relative;
  top: 60px;
  width: 96%;
  height: 100%;
  margin: 30px auto;
  // background: #ccc;

  .header-de {
    width: 100%;
    height: 100%;
    // border: 1px solid #000;
    position: relative;

    .data-left {
      width: 49%;
      height: 100%;
      margin-top: 20px;
    }

    .data-right {
      width: 49%;
      height: 100%;
      margin-top: 20px;
    }

    li {
      display: flex;
      height: 50px;
      line-height: 50px;
      justify-content: space-between;
      padding-left: 15px;

      .title {
        font-size: 15px;
        color: #cfcfcf;
      }
    }

    // top: 50px;
    .header-title {
      text-align: left;
      height: 300px;
      border-bottom: 1px solid #000;

      h1 {
        padding-top: 15px;
        padding-left: 18px;
        text-align: left;
      }
    }
  }

  .header-op {
    text-align: left;
    margin-left: 20px;
    position: relative;
    top: 15px;
    left: 5px;
    padding-left: 20px;
    width: 85px;
    height: 30px;
    line-height: 30px;
    background-color: #e9f3fb;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>