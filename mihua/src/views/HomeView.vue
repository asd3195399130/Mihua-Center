<!--  -->
<template>
  <div class="">
    <el-container>
      <el-aside width="300px">
        <el-col :span="24">
          <div id="box">
            <img src="https://img2.baidu.com/it/u=3733492087,655703298&fm=253&fmt=auto&app=138&f=JPEG?w=672&h=500" alt=""
              width="50" height="50" />
            <h2>米花呼叫中心</h2>
          </div>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            style="height: 100vh" router>
          <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-home"></i>
                <span>首页</span>
              </template>
                </el-submenu> -->
            <el-menu-item index="/HomeView/homepage">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/HomeView/EnterPrise">
              <i class="el-icon-office-building"></i>
              <span slot="title">企业管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">通话统计</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-grid"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-s-operation"></i>
              <span slot="title">系统配置</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">权限配置</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-switch-button"></i>
              <span slot="title" @click="off">退出登录</span>
            </el-menu-item>
          </el-menu>
        </el-col></el-aside>
      <el-container>
        <el-header style="">
          <div class="header-right">
            <i class="el-icon-s-fold" style="font-size: 60px"></i>
          </div>
          <div style="
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                " class="header-c">
            <el-avatar :size="30" :src="circleUrl" style="margin: 10px 10px"></el-avatar>
            <span>admin666</span>
          </div>
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    off() {
      localStorage.removeItem("res");
      this.$router.replace({ path: "/" });
    },
  },

  created() { },
  mounted() { },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
}

.el-header {
  background-color: #e4e8ec;
  color: #333;
  text-align: center;
  line-height: 30px;
  height: 70px;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  left: 280px;
  bottom: 0;
  display: flex;

  .header-c {
    width: 100%;
    background: #e9ebec;
    height: 100%;
    // margin-left: 50px;
    position: relative;
    right: 0;
  }

  .header-right {
    width: 70px;
    height: 60px;
    border: 1px solid red;
    border-top: none;
    border-left: none;
  }
}

.el-aside {
  background-color: #f72f0c;
  color: #333;
  text-align: center;
  // line-height: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 9999;
  padding: 0;
}

.el-main {
  background-color: #f7f7f7;
  color: #333;
  text-align: center;
  // line-height: 160px;
  height: 100%;
  margin-top: 60px;
  // margin: 0;
  padding: 0;
  overflow: auto;
}

body>.el-container {
  margin-bottom: 40px;
  position: relative;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

#box {
  height: 60px;
  line-height: 50px;
  text-align: left;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #333;
  overflow: hidden;

  img {
    border-radius: 50%;
  }

  h2 {
    font-family: "华文楷体";
    color: #ffffff;
    font-size: 22px;
  }
}
</style>