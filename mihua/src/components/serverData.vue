<!--  -->
<template>
  <div class="">
    <!-- <h3>999</h3> -->
    <div class="header">
      <div class="header-top-left">
        <el-dropdown>
          <span class="el-dropdown-link">
            CR-01<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>CR-01</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="footer-cl">
        <div style="text-align: left;padding: 20px;">
          <span>cR-01</span>
        </div>
        <div class="data-left" style="float: left;">
          <ul>
            <li v-for="item in data_left" :key="item.id">
              <span class="data-left-o">{{ item.title }}</span>
              <span>{{ item.span }}</span>
            </li>
          </ul>
        </div>
        <div class="data-right" style="float: right;">
          <ul>
            <li v-for="item in data_right" :key="item.id">
              <span class="data-left-o">{{ item.title }}</span>
              <span style="text-align: center;">{{ item.span }}</span>
              <span class="data-left-o">（{{ item.sunt }}）</span>
            </li>
          </ul>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <div>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="1">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_left: [
        {
          id: 1,
          title: "当前通话并发数",
          span: 0
        }, {
          id: 2,
          title: "今日最高通话并发数",
          span: 0
        }, {
          id: 3,
          title: "历史最高通话并发数",
          span: 0
        }
      ],
      data_right: [
        {
          id: 1,
          title: "当前线路并发数",
          span: 0,
          sunt: "电路0 网络0"
        }, {
          id: 2,
          title: "今日最高线路并发数",
          span: 0,
          sunt: "电路0 网络0"
        }, {
          id: 3,
          title: "历史最高线路并发数",
          span: 7,
          sunt: "电路4 网络3"
        }
      ],
      currentPage4: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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

.header {
  position: relative;
  top: 60px;
  width: 96%;
  height: 400px;
  border: 1px solid #ccc;
  padding-top: 20px;
  margin: 30px auto;

  .header-top-left {
    text-align: left;
    margin-left: 20px;
    position: relative;
    top: 5px;
    left: 5px;
    padding-left: 20px;
    width: 85px;
    height: 30px;
    line-height: 30px;
    background-color: #e9f3fb;

    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
      text-align: center;
    }

    .el-icon-arrow-down {
      font-size: 12px;
    }
  }

  .footer-cl {
    width: 96%;
    // height: 100%;
    position: relative;
    left: 15px;
    top: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

    span {
      font-size: 16px;
      font-weight: 600;
    }

    .data-left {
      width: 49%;

      // text-align: left;
      li {
        display: flex;
        height: 50px;
        line-height: 50px;
        justify-content: space-between;
        padding-left: 15px;
      }

      .data-left-o {
        font-size: 15px;
        color: #cfcfcf;

      }
    }

    .data-right {
      width: 49%;

      ul {
        text-align: left;

        li {
          display: flex;
          height: 50px;
          line-height: 50px;
          justify-content: space-between;
          padding-right: 15px;

          .data-left-o {
            font-size: 15px;
            color: #cfcfcf;
          }
        }
      }
    }
  }

}
</style>