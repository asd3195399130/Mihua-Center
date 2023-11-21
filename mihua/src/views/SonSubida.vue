<!--  -->
<template>
  <div class="">
    <!-- <h2>6666</h2> -->
    <div class="header">
      <div class="header-top">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple" style="">
              <el-dropdown>
                <span class="el-dropdown-link" style="color: #409eff">
                  客户侧<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>服务器测</el-dropdown-item>
                  <el-dropdown-item>企业测</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span>当前企业为启用状态</span>
              <a href="#">停用企业</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="header-centered">
        <ul>
          <li>
            <h2>签单</h2>
            <p>企业类型</p>
          </li>
          <el-divider direction="vertical"></el-divider>
          <li>
            <h2>9999</h2>
            <p>最大座席数</p>
          </li>
          <el-divider direction="vertical"></el-divider>
          <li>
            <h2>9999</h2>
            <p>最大登录并发数</p>
          </li>
          <el-divider direction="vertical"></el-divider>
          <li>
            <h2>停用</h2>
            <p>API功能</p>
          </li>
          <el-divider direction="vertical"></el-divider>
          <li>
            <h2>启用</h2>
            <p>录音</p>
          </li>
        </ul>
      </div>
      <div class="header-footer">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="企业信息配置" name="first">
            <div class="header-footer-first">
              <div class="footer-first-oe">
                <h1>子企业基本信息</h1>
                <i class="el-icon-edit" style="margin-left: 20px"></i>
              </div>
              <div class="footer-live">
                <div>
                  <span class="son"><i>*</i>子企业名称</span>
                  <span class="son-right">客户侧</span>
                </div>
                <div>
                  <span class="son">企业类型</span>
                  <span class="son-right">签单</span>
                </div>
                <div>
                  <span class="son"><i>*</i>截止日期</span>
                  <span class="son-right">--</span>
                </div>
              </div>
              <div class="footer-live-right">
                <div>
                  <span class="son">最大座席数</span>
                  <span class="son-right">客户侧</span>
                </div>
                <div>
                  <span class="son">最大登录并发数</span>
                  <span class="son-right">签单</span>
                </div>
                <div>
                  <span class="son">创建时间</span>
                  <span class="son-right">2019-08-22 19：29：28</span>
                </div>
              </div>
              <div style="clear: both"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="话机列表" name="second">话机列表</el-tab-pane>
          <el-tab-pane label="号码管理" name="third">号码管理</el-tab-pane>
          <el-tab-pane label="坐席管理" name="fourth">坐席管理</el-tab-pane>
          <el-tab-pane label="呼叫计费配置" name="five">
            <!-- 呼叫计费配置 -->
            <div class="five-call">
              <div class="five-call-son">
                <h1>子企业呼转配置</h1>
                <i class="el-icon-edit"></i>
              </div>
              <div class="five-call-obj">
                <span class="five-span"> 呼转特殊配置 </span>
                <span>
                  <el-switch
                    v-model="value"
                    active-color="#409EFF"
                    inactive-color="#dbdbdb"
                  >
                  </el-switch>
                </span>
              </div>
            </div>
            <div class="five-charging">
              <div class="five-call-son">
                <h1>子企业计费配置</h1>
                <i class="el-icon-edit"></i>
              </div>
              <div class="five-call-obj">
                <span class="five-span"> 计费特殊配置 </span>
                <span>
                  <el-switch
                    v-model="value2"
                    active-color="#409EFF"
                    inactive-color="#dbdbdb"
                  >
                  </el-switch>
                </span>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      value: true,
      value2: true,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */

.header {
  width: 100%;
  height: 100%;
  border: 1px solid #0072ff;
  margin-top: 25px;

  //   头部
  .header-top {
    width: 95%;
    height: 50px;
    border: 1px solid #fb8b05;
    margin: auto;

    .el-row {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .el-col {
      border-radius: 4px;
    }

    .bg-purple-dark {
      background: #99a9bf;
    }

    .bg-purple {
      background: #d3dce6;
    }

    .bg-purple-light {
      background: #e5e9f2;
    }

    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      line-height: 36px;
    }

    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;

      a {
        margin-left: 10px;
        color: #0072ff;
      }
    }
  }

  //   头部中间
  .header-centered {
    width: 96%;
    // height: 60px;
    border: 1px solid #ccc;
    margin: 25px auto;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        width: 150px;
        height: 150px;
        line-height: 60px;

        h2 {
          font-size: 33px;
          font-weight: 900;
        }

        p {
          color: #99a9bf;
          font-size: 19px;
        }
      }
    }
  }

  //   头部末尾
  .header-footer {
    width: 96%;
    // height: 600px;
    margin: 35px auto;
    border: 1px solid purple;
    .footer-first-oe {
      width: 100%;
      display: flex;
      padding-left: 15px;
      padding-top: 15px;
      // border: 1px solid purple;
      align-items: center;
      h1 {
        font-size: 19px;
      }
    }
    .el-tabs {
      .header-footer-first {
        width: 100%;
        // height: 500px;
        // border: 1px solid #fb8b05;
        .footer-live {
          width: 49%;
          // height: 500px;
          // border: 1px solid #fff;
          line-height: 60px;
          float: left;
          i {
            margin-right: 5px;
            color: red;
            padding-top: 10px;
          }
          span {
            display: inline-block;
            width: 45%;
            font-size: 16px;
          }
          .son {
            color: #99a9bf;
            text-align: right;
          }
          .son-right {
            text-align: left;
            margin-left: 15px;
            font-size: 18px;
            color: #000;
            font-weight: 600;
          }
        }
        .footer-live-right {
          width: 49%;
          // height: 500px;
          // border: 1px solid #fff;
          line-height: 60px;
          float: right;
          i {
            margin-right: 5px;
            color: red;
            padding-top: 10px;
          }
          span {
            display: inline-block;
            width: 45%;
            font-size: 16px;
          }
          .son {
            color: #99a9bf;
            text-align: right;
          }
          .son-right {
            text-align: left;
            margin-left: 15px;
            font-size: 18px;
            color: #000;
            font-weight: 600;
          }
        }
      }
      .five-call {
        width: 100%;
        height: 80px;
        // border: 1px solid #ccc;
        margin-top: 25px;
        .five-call-son {
          display: flex;
          align-items: center;
          padding: 15px;
          i {
            margin-left: 5px;
          }
        }
        .five-call-obj {
          width: 95%;
          height: 60px;
          margin: auto;
          // border: 1px solid red;
          text-align: left;
          span {
            width: 95%;
            font-size: 18px;
          }
          .five-span {
            color: #99a9bf;
            font-weight: 500;
          }
        }
      }
      .five-charging {
        width: 100%;
        height: 80px;
        // border: 1px solid #ccc;
        margin-top: 25px;
        .five-call-son {
          display: flex;
          align-items: center;
          padding: 15px;
          i {
            margin-left: 5px;
          }
        }
        .five-call-obj {
          width: 95%;
          height: 60px;
          margin: auto;
          // border: 1px solid red;
          text-align: left;
          span {
            width: 95%;
            font-size: 18px;
          }
          .five-span {
            color: #99a9bf;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>