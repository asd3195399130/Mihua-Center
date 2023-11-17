<!--  -->
<template>
  <div class="">
    <div class="login-back">
      <h1>米花中心</h1>
      <div class="login-c">
        <h2>用户登录</h2>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input
              placeholder="请输入您的账户"
              prefix-icon="el-icon-user"
              v-model="form.name"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="密码6-18位"
              prefix-icon="el-icon-lock"
              v-model="form.pwd"
              show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入验证码"
              prefix-icon="el-icon-edit-outline"
              v-model="form.code"
              style="width: 200px; margin-right: 22px"
            >
            </el-input>
            <span>{{ form.textcode }}</span>
            <a href="#" @click="Refresh">换一张</a>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Codefun, loginFun } from "../api/login";
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: "",
        code: "",
        textcode: "",
      },
    };
  },
  methods: {
    onSubmit() {
      let data = {
        name: this.form.name,
        pwd: this.form.pwd,
        vercode: this.form.code,
      };
      //   console.log("submit!");
      if (!this.form.name || !this.form.pwd || !this.form.code) {
        this.$alert("账户、密码和验证码不能为空", {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        });
      }
      loginFun(data).then((res) => {
        console.log(res, "1111");
        if (res.code == 0) {
          this.$message({
            message: "登入成功",
            type: "success",
          });
          localStorage.setItem("res", res.code);
          this.$router.replace({ path: "/HomeView" });
        } else {
          this.$message({
            message: `${res.msg}`,
            type: "success",
          });
        }

        console.log(data);
      });
    },
    Refresh() {
      Codefun().then((res) => {
        this.form.textcode = res.msg;
      });
    },
  },
  created() {},
  // beforeMount() {
  //   console.log(localStorage.getItem("res"));
  //   if (localStorage.getItem("res") == 0) {
  //     this.$router.replace({ path: "/HomeView" });
  //   }
  // },
  mounted() {
    this.Refresh();
  },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.login-back {
  width: 100%;
  height: 100vh;
  background: url(https://img0.baidu.com/it/u=655297173,2578050874&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500)
    no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  position: relative;
  display: flex; /* 将容器设置为 Flex 容器 */
  flex-direction: column;
  justify-content: space-between; /* 上下居中 */
  align-items: center;
  text-align: center; /* 文本水平居中 */
  padding: 20px;
  h1 {
    position: absolute;
    top: 150px;
    font-family: "楷体";
    color: #fff;
    font-weight: 900;
  }
  .login-c {
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      text-align: left;
      padding: 30px;
    }
    .el-form {
      width: 100%;
      .el-input {
        width: 80%;
      }
      .el-form-item {
        span {
          display: inline-block;
          width: 120px;
          height: 40px;
          //   border: 1px solid red;
          background: url(https://img2.baidu.com/it/u=530449983,2994237914&fm=253&fmt=auto&app=138&f=PNG?w=324&h=323)
            no-repeat;
          background-size: cover;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
            0 0 6px rgba(12, 12, 12, 0.04);
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }
        a {
          color: #000;
          font-size: 14px;
          font-weight: 500;
          margin-left: 16px;
        }
        a:hover {
          color: blue;
        }
      }
    }
  }
}
a {
  text-decoration: none;
}
</style>