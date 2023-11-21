<!--  -->
<template>
  <div class="">
    <el-container>
      <el-aside width="300px">
        <div class="header-left">
          <h2>超级企业列表{{ superlist.length }}</h2>
          <el-input
            v-model="input"
            placeholder="超级企业名称"
            @input="search"
          ></el-input>
          <el-button
            icon="el-icon-plus"
            type="primary"
            @click="dialogFormVisible = true"
          ></el-button>
        </div>
        <div class="inlint">
          <ul>
            <li
              v-for="(item, index) in superlist"
              :key="index"
              @click="formk(item.id)"
            >
              <span
                :class="['status-dot', item.status === 1 ? 'green' : 'red']"
              ></span>
              <span>{{ item.ename }}</span>
            </li>
          </ul>
        </div>
      </el-aside>
      <el-main>
        <div class="amin-bt">
          <div class="mian-bls">
            <router-link
              to="/HomeView/EnterPrise/MegacorPor"
              tag="el-button"
              exact
              >超级企业管理</router-link
            >
            <el-divider direction="vertical"></el-divider>
            <router-link
              to="/HomeView/EnterPrise/SonSubida"
              tag="el-button"
              exact
              >子企业管理</router-link
            >
          </div>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="超级企业名称">
          <el-input v-model="form.ename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="ip域名">
          <el-input v-model="form.ipstr" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="超级管理员账号">
          <el-input v-model="form.adminname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.adminemil" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="最大座席数">
          <el-input v-model="form.maxnum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="最大登录并发总数">
          <el-input v-model="form.maxconcurrency" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addclick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { gainsuper, Addsuper, searcher } from '../api/Super';
export default {
  data() {
    return {
      input: '',
      superlist: [],
      dialogFormVisible: false,
      form: {
        ename: '',
        ipstr: '',
        adminname: '',
        adminemil: '',
        maxnum: '',
        maxconcurrency: '',
      },
      formLabelWidth: '120px',
    };
  },
  computed: {},
  methods: {
    // 模糊搜索
    search() {
      //   console.log(this.input);
      let eams = this.input;
      let obj = {
        ename: eams,
      };
      searcher(obj).then((res) => {
        console.log(res.data);
        // this.reading();
        this.superlist = res.data.data;
        console.log(this.superlist);
      });
    },
    // 添加企业
    addclick() {
      this.dialogFormVisible = !this.dialogFormVisible;
      let obj = {
        ename: this.form.ename,
        ipstr: this.form.ipstr,
        adminname: this.form.adminname,
        adminemil: this.form.adminemil,
        maxnum: this.form.maxnum,
        maxconcurrency: this.form.maxconcurrency,
      };
      Addsuper(obj).then((res) => {
        console.log(res);
        this.reading();
        // console.log(res);
        // this.obj = res.data;
        // console.log(obj);
      });
    },
    reading() {
      gainsuper().then((res) => {
        // console.log(res)
        this.superlist = res.data.data;
        // console.log(this.super);
      });
    },
    formk(id) {
      this.$bus.$emit('formk', id);
    },
  },
  created() {
    this.reading();
  },
  mounted() {
    this.$bus.$on('upsuper', () => {
      this.reading();
    });
  },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  list-style: none;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  // text-align: center;
  // line-height: 200px;
  height: 100vh;

  .header-left {
    text-align: left;
    padding-top: 20px;
    padding-left: 20px;
    height: 130px;
    // z-index: 99;
    // position: fixed;
    // top: 50px;
    background: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .el-input {
      width: 60%;
      margin-top: 15px;
    }

    .el-button {
      margin-left: 15px;
    }
  }

  .inlint {
    position: relative;
    top: 14px;

    li:hover {
      background: #ecf5ff;
    }

    li {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      text-align: left;
      padding-left: 15px;

      span:nth-child(2) {
        font-size: 15px;
        margin-left: 20px;
      }

      .status-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 5px;
      }

      .green {
        background-color: green;
      }

      .red {
        background-color: red;
      }
    }
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // height: 100vh;

  .amin-bt {
    width: 100%;
    height: 100%;
    // background: red;

    .mian-bls {
      text-align: left;
      height: 60px;
      background: #000;
      padding-left: 15px;
      padding-top: 15px;
    }
  }
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>