<!--  -->
<template>
  <div class="">
    <div class="header">
      <div class="header-top">
        <div class="header-top-fir">
          <el-dropdown>
            <span class="el-dropdown-link">
              角色状态<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>在线</el-dropdown-item>
              <el-dropdown-item>离线</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
            @input="searcher"
            @keyup.enter="searcher"
          >
            <el-button slot="append" icon="el-icon-search" @click="searcher"></el-button>
          </el-input>
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="dialogFormVisible = true"
            >添加系统角色</el-button
          >
        </div>
      </div>
      <div class="header-create">
        <el-table
          :data="tableData"
          style="width: 100%; background: #eceef5"
          height="100%"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column fixed prop="id" label="角色id" width="150" sortable>
          </el-table-column>
          <el-table-column fixed prop="rolename" label="角色名称" width="150">
          </el-table-column>
          <el-table-column prop="describe" label="角色描述" width="120">
          </el-table-column>
          <el-table-column prop="powers" label="角色权限配置" width="120">
          </el-table-column>
          <el-table-column prop="status" label="角色启用状态" width="120">
            <template slot-scope="scope">
              <el-tag
                type="dot"
                :class="{
                  'is-green': scope.row.status === 1,
                  'is-red': scope.row.status === 0,
                }"
              >
              </el-tag>
              <span v-if="scope.row.status === 1">已启用</span>
              <span v-else>未启用</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="lasttime"
            label="最后编辑时间"
            width="300"
            sortable
          >
            <template slot-scope="scope">
              {{ formatDate(scope.row.lasttime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-edit"
                circle
                @click="updatastaty(scope.row)"
              ></el-button>
              <el-button
                size="small"
                type="danger"
                icon="el-icon-delete"
                circle
                @click="handledele(scope.row.id)"
              ></el-button>
              <el-button
                :icon="
                  scope.row.status === 1
                    ? 'el-icon-video-play'
                    : 'el-icon-switch-button'
                "
                circle
                @click="handstop(scope.row.id, scope.row.status)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="pagelimit"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            style="color: red"
          >
          </el-pagination>
        </div>
      </div>
      <!-- 添加 -->
      <el-dialog title="添加系统角色" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="角色名称" :label-width="formLabelWidth">
            <template #label>
              <span style="color: red">*</span> 角色名称
            </template>
            <el-input
              v-model="form.rolename"
              autocomplete="off"
              size="medium"
            ></el-input>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              autosize
              :rows="2"
              placeholder="请输入内容"
              v-model="form.describe"
              size="medium"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="是否启用" :label-width="formLabelWidth">
            <template #label>
              <span style="color: red">*</span> 是否启用
            </template>
            <el-radio v-model="form.status" :label="1">启用</el-radio>
            <el-radio v-model="form.status" :label="0">停用</el-radio>
          </el-form-item>
          <el-form-item label="权限配置" :label-width="formLabelWidth">
            <template #label>
              <span style="color: red">*</span> 权限配置
            </template>
            <el-input
              v-model="form.powers"
              autocomplete="off"
              size="medium"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click.prevent="addstyle">
            确 定
          </el-button>
        </div>
      </el-dialog>
      <!-- 修改 -->
      <el-dialog title="修改系统指令" :visible.sync="dishpol">
        <el-form :model="formdata">
          <el-form-item label="角色名称" :label-width="formLabelWidth">
            <template #label>
              <span style="color: red">*</span> 角色名称
            </template>
            <el-input
              v-model="formdata.rolename"
              autocomplete="off"
              size="medium"
            ></el-input>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              autosize
              :rows="2"
              placeholder="请输入内容"
              v-model="formdata.describe"
              size="medium"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="是否启用" :label-width="formLabelWidth">
            <template #label>
              <span style="color: red">*</span> 是否启用
            </template>
            <el-radio v-model="formdata.status" :label="1">启用</el-radio>
            <el-radio v-model="formdata.status" :label="0">停用</el-radio>
          </el-form-item>
          <el-form-item label="权限配置" :label-width="formLabelWidth">
            <template #label>
              <span style="color: red">*</span> 权限配置
            </template>
            <el-input
              v-model="formdata.powers"
              autocomplete="off"
              size="medium"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dishpol = false">取 消</el-button>
          <el-button type="primary" @click.prevent="updateup"> 保存 </el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {
  systom,
  getdel,
  getstop,
  addsystom,
  updatesystom,
  searchers
} from '../../api/Manage';
export default {
  data() {
    return {
      input3:'',
      status:"",
      tableData: [],
      pagelimit: 10,
      page: 1,
      total: 0,
      dialogFormVisible: false,
      dishpol: false,
      form: {
        rolename: '',
        describe: '',
        powers: '',
        status: '',
      },
      formdata: {
        id: null,
        rolename: '',
        describe: '',
        powers: '',
        status: '',
      },
      formLabelWidth: '120px',
    };
  },
  methods: {
    // 搜索
    searcher(){
      let obj = {
        rolename:this.input3
      }
      // console.log(1213);
      searchers(obj).then(res=>{
        if(res.code == 0){
          this.tableData = res.data.data
          if(this.value == 2){
            this.tableData = this.tableData.filter(item=>{
              return item.status ==1
            })
          }else if(this.value == 3){
            this.tableData = this.tableData.filter(item=>{
              return item.status ==0
            })
          }
          // this.reading()
        } else{
          this.$message(res.msg)
        }
        
        // this.reading()
      })
    },
    // 添加
    addstyle() {
      let obj = {
        rolename: this.form.rolename,
        describe: this.form.describe,
        powers: this.form.powers,
        status: this.form.status,
      };
      addsystom(obj).then((res) => {
        console.log(res.data);
        this.reading();
      });
      this.dialogFormVisible = !this.dialogFormVisible;
      this.form.rolename = '';
      this.form.describe = '';
      this.form.powers = '';
      this.form.status = '';
    },
    //  修改
    updateup() {
      updatesystom(this.formdata).then((res) => {
        console.log(res.data + ' 66666');
        this.reading();
        this.dishpol = false;
      });
    },
    updatastaty(row) {
      console.log(row.status);
      //let edit = id
      this.formdata.id = row.id;
      this.formdata.rolename = row.rolename;
      this.formdata.powers = row.powers;
      this.formdata.describe = row.describe;
      this.formdata.status = row.status;
      this.dishpol = true;
    },

    // 转换时间戳
    formatDate(timestamp) {
      // 创建 Date 对象并传入时间戳
      const date = new Date(timestamp);

      // 使用 Date 对象提供的方法获取年、月、日、时、分、秒
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 月份是从 0 开始的，所以要加 1
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();

      // 将获取到的时间组合成正常的时间格式
      const normalTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

      return normalTime;
    },

    //修改状态

    handstop(id, status) {
      this.$confirm((status ? '确认停用角色' : '确定启用角色') + '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          let obj = {
            id: id,
            status: status ? 0 : 1,
          };
          getstop(obj).then((res) => {
            console.log(res);
            this.reading();
          });
          this.$message({
            type: 'success',
            message: status ? '停用成功' : '启用成功',
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: status ? '取消停用' : '取消启用',
          });
        });
    },
    // 删除
    handledele(id) {
      console.log(id);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          getdel(id).then((res) => {
            console.log(res);
            this.reading();
          });
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
    // 渲染
    reading() {
      let respage = {
        page: this.page,
        pagelimit: this.pagelimit,
      };
      systom(respage).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.total = res.data.pagecount;
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pagelimit = val; // 更新每页显示的条数
      this.page = 1; // 重置当前页为第一页
      this.reading(); // 重新读取数据
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val; // 更新当前页
      this.reading(); // 重新读取数据
    },
  },
  created() {
    this.reading();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.header {
  width: 96%;
  height: 100%;
  // height: 500px;
  border: 1px solid #000;
  margin: 40px auto;
  .header-top {
    text-align: left;
    .header-top-fir {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .el-input {
      width: 45%;
    }
    .el-dropdown {
      //   text-align: left;
      margin-left: 15px;
      margin-top: 20px;
      background: #e9f3fb;
      width: 150px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .header-create {
    width: 100%;
    height: 500px;
    background: red;
  }
}
.is-green {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: green; /* 绿色 */
  color: red;
}

.is-red {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: red; /* 红色 */
}
.el-dialog {
  width: 500px;
  height: 500px;
}
::v-deep {
  .el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff;   // 进行修改未选中背景和字体
    // color: #fff;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: red;   // 进行修改选中项背景和字体
    color: gold;
  }
}
</style>