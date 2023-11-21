<!--  -->
<template>
  <div class="header">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1>总机号码管理</h1>
      </div>
      <div class="text item">
        <el-dropdown
          style="
            background: #e9f3fb;
            width: 120px;
            height: 30px;
            line-height: 33px;
            padding-left: 15px;
          "
        >
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div style="margin-top: -40px; margin-left: 164px">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
            style="width: 300px"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%; margin-top: 50px"
        >
          <el-table-column prop="date" label="总机号码" width="180">
          </el-table-column>
          <el-table-column prop="namestatus" label="号码状态" width="180">
          </el-table-column>
          <el-table-column prop="address" label="号码属性"> </el-table-column>
          <el-table-column prop="" label="归属组/坐席"> </el-table-column>
          <el-table-column prop="" label="组名称"> </el-table-column>
          <el-table-column prop="" label="坐席名称"> </el-table-column>
          <el-table-column prop="" label="呼入IVR"> </el-table-column>
          <el-table-column prop="status" label="开启状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#909399"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="dateTime" label="最后编辑时间"> </el-table-column>
          <el-table-column prop="" label="操作"> 
              <el-button icon="el-icon-setting" circle></el-button>
              <el-button icon="el-icon-set-up" circle></el-button>
          </el-table-column>
        </el-table>
          <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      background
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '0295896855',
          namestatus: '正常',
          address: '公共',
          status: true,
          dateTime:"2023-11-21 21:37:00"
        },

      ],
       currentPage4: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.header {
  width: 95%;
  height: 650px;
  background: red;
  margin: 50px auto;
  .text {
    font-size: 14px;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix {
    text-align: left;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 100%;
    height: 100%;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
::v-deep {
  .el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff;   // 进行修改未选中背景和字体
    // color: #fff;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: purple;   // 进行修改选中项背景和字体
    color: #fff;
  }
}
</style>