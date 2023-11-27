<template>
  <div class="header">
    <div style="float: right; margin-top: 50px; margin-right: 50px">
      <el-button type="warning" @click="dialogFormVisible = true">
        <el-icon><CirclePlusFilled /></el-icon>
        添加设备模板</el-button
      >
        <el-button type="primary" @click="handleSort">
      {{ sortDirection === 'asc' ? '升序排序' : '倒序排序' }}
    </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 95%; margin: auto"
      class="custom-table"
      border
    >
      <el-table-column prop="id" label="序号" width="200" align="center" />
      <el-table-column
        prop="device"
        label="设备模板唯一标识"
        width="200"
        align="center"
      />
      <el-table-column
        prop="name"
        label="设备模板名称"
        width="200"
        align="center"
      />
      <el-table-column
        prop="group"
        label="所属设备组"
        width="200"
        align="center"
      />
      <el-table-column
        prop="create"
        label="创建时间"
        width="200"
        align="center"
        :icon="Timer"
      />
      <el-table-column
        prop="creator"
        label="创建者"
        width="200"
        align="center"
      />
      <el-table-column align="text" label="操作">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <el-icon size="15"><Search /></el-icon>
          </el-button>
          <el-button
            size="small"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <el-icon :size="20">
              <Edit />
            </el-icon>
          </el-button>
          <el-button
            size="small"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <el-icon>
              <Delete />
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
       
  </div>
  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form"
  :rules="refRules"
 ref="formRef"
>
      <el-form-item label="设备唯一标识" :label-width="formLabelWidth" prop="device">
        <el-input v-model="form.device" autocomplete="off" />
      </el-form-item>
      <el-form-item label="设备模板名称" :label-width="formLabelWidth" prop="name">
        <el-select v-model="form.name" placeholder="Please select a zone">
          <el-option label="B001" value="B001" />
          <el-option label="B002" value="B002" />
          <el-option label="B003" value="B003" />
          <el-option label="B004" value="B004" />
          <el-option label="B005" value="B005" />
          <el-option label="B006" value="B006" />
          <el-option label="B007" value="B007" />
          <el-option label="B008" value="B008" />
          <el-option label="B009" value="B009" />
        </el-select>
      </el-form-item>
      <el-form-item label="所属设备组" :label-width="formLabelWidth" prop="group">
        <el-select v-model="form.group" >
  <el-option label="智能人工" value="智能人工" />
  <el-option label="智能Ai" value="智能Ai" />
  <el-option label="语音助手" value="语音助手" />
  <el-option label="智能客服" value="智能客服" />

        </el-select>
     
      </el-form-item>
     <el-form-item label="创建时间" prop="date1">
      <el-col :span="11">
        <el-date-picker
          v-model="form.create"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="创建者" :label-width="formLabelWidth" prop="creator">
        <el-input v-model="form.creator" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submit()">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script setup lang="ts">
import { ref, reactive,onMounted } from 'vue';
import { ElMessage, ElMessageBox ,} from 'element-plus';
import moment from 'moment';
const dialogFormVisible = ref(false);

const form = reactive({
  device:"",
  name:"",
  group:"",
 create:"",
  creator:""
 
})
const tableData = ref([
  {
    id: 1,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo4',
    group: '智能人工',
    create: '2020-07-15 20:41:00',
    creator: 'admin1',
  },
  {
    id: 2,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo5',
    group: '智能Ai',
    create: '2020-07-15 20:41:00',
    creator: 'Langel',
  },
  {
    id: 3,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo6',
    group: '语音助手',
    create: '2020-07-15 20:41:00',
    creator: 'Jason',
  },
  {
    id: 4,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo7',
    group: '智能客服',
    create: '2020-07-15 20:41:00',
    creator: 'Angel',
  },
  {
    id: 5,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo4',
    group: '智能Ai',
    create: '2020-07-15 20:41:00',
    creator: 'Admin',
  },
  {
    id: 6,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo5',
    group: '智能人工',
    create: '2020-07-15 20:41:00',
    creator: 'Langel',
  },
  {
    id: 7,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo6',
    group: '智能客服',
    create: '2020-07-15 20:41:00',
    creator: 'admin1',
  },
  {
    id: 8,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo7',
    group: '智能Ai',
    create: '2020-07-15 20:41:00',
    creator: 'admin1',
  },
  {
    id: 9,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo8',
    group: '智能客服',
    create: '2020-07-15 20:41:00',
    creator: 'admin1',
  },
  {
    id: 10,
    device: 'Cuz5L9XOXHBNOa871a4',
    name: 'Boo9',
    group: '语音助手',
    create: '2020-07-15 20:41:00',
    creator: 'admin1',
  },
]);
// const rules = {
//   device: [{ required: true, message: '请输入设备唯一标识', trigger: 'blur' }],
//   name: [{ required: true, message: '请选择设备模板名称', trigger: 'change' }],
//   group: [{ required: true, message: '请选择所属设备组', trigger: 'change' }],
//   date1: [{ type: 'date', required: true, message: '请选择创建时间', trigger: 'change' }],
//   creator: [{ required: true, message: '请输入创建者', trigger: 'blur' }]
// };

const formLabelWidth = '120px';
const submit=()=>{
   const createTime = moment(form.create);  // 假设 form.create 是用户输入的时间字符串
  const formattedCreateTime = createTime.format('YYYY-MM-DD HH:mm:ss');  // 使用指定的时间格式
  tableData.value.push({

    id: tableData.value.length + 1,
    device: form.device,
    name: form.name,
    group: form.group,
    create:  formattedCreateTime,
    creator: form.creator
  });

  // 提交成功后关闭弹窗
  dialogFormVisible.value = false;

  // 清空表单数据
  form.device = "";
  form.name = "";
  form.group = "";
  form.create = "";
  form.creator = "";

  // 提示用户添加成功
  ElMessage({
    type: 'success',
    message: '添加成功!'
  });
}
let sortDirection = ref('asc');

function handleSort(): void {
  if (sortDirection.value === 'asc') {
    sortDirection.value = 'desc';
    tableData.value.sort((a, b) => b.id - a.id);
  } else {
    sortDirection.value = 'asc';
    tableData.value.sort((a, b) => a.id - b.id);
  }
}
const handleDelete = (index, row) => {
  ElMessageBox.confirm(
    '此操作将永久删除该文件, 是否继续?',
    'Warning',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      tableData.value.splice(index, 1);
      ElMessage({
        type: 'success',
        message: '删除成功!',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
  // 处理删除逻辑，可以根据需要编写具体的代码
  // 在这个示例中，我们将使用 splice 方法从 tableData 中删除指定的行数据
  
};
// const order = ref('asc');
// const sortList = (order) => {
//   if(order.value === 'asc'){
//    tableData.value.sort((a,b)=>a.id-b.id)
//   } else if(order.value === "desc"){
//      tableData.value.sort((a,b)=>b.id-a.id)
//   }
// }
// onMounted(()=>{
//  sortList(order);
// })
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 100vh;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #375595,
    #56417a,
    #4e3a7a,
    #152874
  );
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #375595, #56417a, #4e3a7a, #152874);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .el-table {
    position: relative;
    top: 50px;
    // text-align: center;
    background: -webkit-linear-gradient(
      to bottom,
      #375595,
      #56417a,
      #4e3a7a,
      #152874
    );
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #375595, #56417a, #4e3a7a, #152874);
    ::v-deep {
      th {
        background: linear-gradient(
          to bottom,
          #375595,
          #56417a,
          #4e3a7a,
          #152874
        );
        margin: auto;
        color: #bac3d9;
      }
      td {
        background: linear-gradient(
          to bottom,
          #375595,
          #56417a,
          #4e3a7a,
          #152874
        );
        color: #bac3d9;
      }
    }
  }
  .el-button {
    text-align: center;
  }
}
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>