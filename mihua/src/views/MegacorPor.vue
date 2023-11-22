<!--  -->
<template>
  <div class="">
    <div class="header">
      <ul>
        <li>
          <img src="../assets/微信截图_20231117114602.png" alt="" />
          <p class="num">{{ data.ename }}</p>
          <p class="title">子企业个数</p>
        </li>
        <li>
          <img src="../assets/微信截图_20231117114624.png" alt="" />
          <p class="num">{{ data.insnum }}</p>
          <p class="title">最大座席数</p>
        </li>
        <li>
          <img src="../assets/微信截图_20231117114634.png" alt="" />
          <p class="num">{{ data.maxnum }}</p>
          <p class="title">实际座席数</p>
        </li>
        <li>
          <img src="../assets/微信截图_20231117114651.png" alt="" />
          <p class="num">{{ data.stopnum }}</p>
          <p class="title">停用座席数</p>
        </li>
        <li>
          <img src="../assets/微信截图_20231117114700.png" alt="" />
          <p class="num">{{ data.maxconcurrency }}</p>
          <p class="title">最大登录总数</p>
        </li>
        <li>
          <img src="../assets/微信截图_20231117114709.png" alt="" />
          <p class="num">{{ data.yucenum }}</p>
          <p class="title">预测试外呼坐席并发总数</p>
        </li>
      </ul>
    </div>
    <div class="middle">
      <div class="middle-top">
        <div class="middle-top-left">
          <h1>超级企业信息 <i class="el-icon-edit"></i></h1>
        </div>
        <div class="middle-top-right">
          <p>当前超级企业为启用状态</p>
          <a href="#" @click.prevent="enable(data.id)"
            >{{ data.status === 1 ? '启用' : '停用' }}超级企业</a
          >
        </div>
      </div>
      <div id="BasicMessageModuleBoxxiabian_bootn">
        <div id="BasicMessageModuleBoxxiabian_bootnlfet">
          <p>
            &nbsp;&nbsp;&nbsp;<a href="#">*</a
            >&nbsp;超级企业名称&nbsp;&nbsp;&nbsp;<span>{{ data.ename }}</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
              href="#"
              >*</a
            >&nbsp;企业域名&nbsp;&nbsp;&nbsp;<span>{{ data.ipstr }}</span>
          </p>
          <p>
            <a href="#">*</a>&nbsp;超级管理员账号&nbsp;&nbsp;&nbsp;<span>{{
              data.adminname
            }}</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">*</a>&nbsp;邮箱&nbsp;&nbsp;&nbsp;<span>{{
              data.adminemil
            }}</span>
          </p>
        </div>
        <div id="BasicMessageModuleBoxxiabian_bootnright">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;超级企业ID&nbsp;&nbsp;&nbsp;<span>{{
              data.id
            }}</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;最大座席数&nbsp;&nbsp;&nbsp;<span>{{ data.insnum }}</span>
          </p>
          <a href="#">当前坐席总数小于子企业实际累加总数9999，请及时修改</a>
          <p>
            &nbsp;最大登录并发总数&nbsp;&nbsp;&nbsp;<span>{{
              data.maxconcurrency
            }}</span>
          </p>
          <a href="##"
            >当前登录并发总数小于子企业实际累加总数9999，请及时修改</a
          >
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建时间&nbsp;&nbsp;&nbsp;<span
              >2019-08-22 19:21:58</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { viewsuper, upsuper } from '../api/Super';
export default {
  // props: ["superlist"],
  data() {
    return {
      // superlist: ""
      data: [],
    };
  },
  methods: {
    enable(id) {
      console.log(id);
      let obj = {};
      console.log(this.data.status);
      if (this.data.status === 1) {
        this.$confirm('是否停用超级企业', '提示信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认停用',
          cancelButtonText: '放弃停用',
        })
          .then(() => {
            obj = { id, status: 0 };
            upsuper(obj).then(
              () => {
                this.message();
                // this.getMessage();
                this.$bus.$emit('upsuper');
              },
              (reason) => {
                this.$message.error(reason.msg);
              }
            );
            this.$message({
              type: 'success',
              message: '停用成功',
            });
          })
          .catch((action) => {
            this.$message({
              type: 'info',
              message: action === 'cancel' ? '放弃停用' : '放弃停用',
            });
          });
      } else {
        this.$confirm('是否启用超级企业', '提示信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认启用',
          cancelButtonText: '放弃启用',
        })
          .then(() => {
            obj = { id, status: 1 };
            upsuper(obj).then(
              () => {
                this.message();
                this.$bus.$emit('upsuper');
              },
              (reason) => {
                this.$message.error(reason.msg);
              }
            );
            this.$message({
              type: 'success',
              message: '启用成功',
            });
          })
          .catch((action) => {
            this.$message({
              type: 'info',
              message: action === 'cancel' ? '放弃启用' : '放弃启用',
            });
          });
      }
    },
    message(id) {
      viewsuper(id).then((res) => {
        this.data = res.data;
      });
    },
  },
  created() {},
  mounted() {
    this.$bus.$on('formk', (id) => {
      this.message(id); //   viewsuper(id).then((res) => {
      //     this.data = res.data;
    });
  },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  list-style: none;
}

.header {
  // width: 95%;
  // height: 500px;
  background: #fcfcfc;
  margin: auto;
  position: relative;
  top: 20px;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    width: 50%;
    // height: 90px;
    // border: 1px solid red;

    .num {
      color: #000;
      font-size: 30px;
      font-weight: 600;
    }

    .title {
      color: #ccc;
      font-size: 20px;
      font-weight: 600;
    }

    img {
      width: 150px;
      height: 150px;
    }
  }
}

.middle {
  width: 100%;
  height: 500px;
 background: #fcfcfc;
  position: relative;
  top: 50px;
  margin-top: 20px;

  .middle-top {
    text-align: left;
    padding-left: 25px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .middle-top-right {
      margin-right: 25px;
      p {
        float: left;
      }
      a {
        color: #409eff;
        margin-left: 25px;
      }
    }
  }

  #BasicMessageModuleBoxxiabian_bootn {
    width: 100%;
    display: flex;
    line-height: 50px;
    height: 20px;

    a {
      color: red;
      text-decoration: none;
    }

    span {
      font-weight: 600;
      color: #000;
    }

    p {
      color: #9aabb1;
    }

    #BasicMessageModuleBoxxiabian_bootnlfet {
      padding-left: 60px;
    }

    #BasicMessageModuleBoxxiabian_bootnright {
      padding-left: 100px;
    }
  }
}
</style>