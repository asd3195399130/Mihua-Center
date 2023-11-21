<!--  -->
<template>
  <div class="">
    <div class="header">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h1>呼转计费配置</h1>
        </div>
        <div class="text item">
          <div>
            <el-dropdown split-button type="primary" @click="handleClick">
              -中继类型-
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>奥科</el-dropdown-item>
                <el-dropdown-item>IMS</el-dropdown-item>
                <el-dropdown-item>网经</el-dropdown-item>
                <el-dropdown-item>NGN</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown split-button type="primary" @click="handleClick">
              -是否呼转-
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>是</el-dropdown-item>
                <el-dropdown-item>否</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown split-button type="primary" @click="handleClick">
              -是否计费-
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>是</el-dropdown-item>
                <el-dropdown-item>否</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div style="margin-top: -40px; margin-left: 464px">
              <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
                style="width: 300px"
              >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
          <el-table :data="tableData" border  style="width: 100% ;margin-top:50px" >
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="省/市">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="中继类型">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="是否呼转">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="呼转范围">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="是否计费">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="不计费范围">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="省/市" prop="id"> </el-table-column>
            <el-table-column label="中继类型" prop="name"> </el-table-column>
            <el-table-column label="是否呼转" prop="category"> </el-table-column>
            <el-table-column label="呼转范围" prop="shopId"> </el-table-column>
            <el-table-column label="是否计费" prop="shop"> </el-table-column>
            <el-table-column label="不计费范围" prop="desc"> </el-table-column>
            <el-table-column label="操作" prop=""> 
                <template>
        <el-button size="mini" type="danger" icon="el-icon-document"></el-button>
      </template>
            </el-table-column>
          </el-table>
           <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      :background=true
      layout="total, sizes, prev, pager, next, jumper"
      id="total"
      style="--el-color-primary: #00aaa2"
      :total="400">
   
    </el-pagination>
  </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: '',
      currentPage4:"",
        tableData: [{
          id: '背景',
          name: '奥科',
          category: '全部不呼转',
          desc: '--',        
          shop: '全部计费',
          shopId: '--'
        }, {
          id: '上海',
          name: 'IMS',
          category: '全部不呼转',
          desc: '--',         
          shop: '全部计费',
          shopId: '--'
        }, {
          id: '浙江',
          name: '网经',
          category: '全部不呼转',
          desc: '手机、本地、联通',      
          shop: '全部计费',
          shopId: '--'
        }, {
          id: '河北',
          name: 'NGN',
          category: '部分呼转',
          desc: '手机、本地、联通',
          
          shop: '部分计费',
          shopId: '手机、本地、移动'
        }]
    };
  },
  methods: {
    handleClick() {
      alert('button click');
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.header {
  width: 95%;
  height: 600px;
  background: red;
  margin: 25px auto;
  .text {
    font-size: 14px;
    text-align: left;
    .el-dropdown {
      vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
      margin-left: 15px;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
    
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
::v-deep {
  .el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff;   // 进行修改未选中背景和字体
    // color: #fff;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: green;   // 进行修改选中项背景和字体
    color: #fff;
  }
}

</style>