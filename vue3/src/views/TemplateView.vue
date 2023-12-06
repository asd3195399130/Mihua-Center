<template>
  <div class="header">
    <a-button type="primary" @click="handleSort">
      {{ sortDirection === 'asc' ? '升序排序' : '倒序排序' }}
    </a-button>
     <button type="primary" @click="showModal" style="" class="addcl">添加</button>
    <a-modal v-model:visible="visible" title="添加" :footer="null" >
     <a-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item has-feedback label="设备唯一标识：" :name="['device']" :rules="rules.device" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
    <a-input v-model:value="formState.device" type="text" autocomplete="off"  />
  </a-form-item>
  <a-form-item has-feedback label="设备模板名称：" :name="['name']" :rules="rules.name" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
    <a-select v-model:value="formState.name">
      <a-select-option value="B004">B004</a-select-option>
      <a-select-option value="B005">B005</a-select-option>
      <a-select-option value="B006">B006</a-select-option>
      <a-select-option value="B007">B007</a-select-option>
      <a-select-option value="B008">B008</a-select-option>
      <a-select-option value="B009">B009</a-select-option>
      <!-- 在这里添加更多的模板选项 -->
    </a-select>
  </a-form-item>
  <a-form-item has-feedback label="所属设备组" :name="['group']" :rules="rules.group">
    <a-select v-model:value="formState.group">
      <a-select-option value="智能Ai">智能Ai</a-select-option>
      <a-select-option value="智能人工">智能人工</a-select-option>
      <a-select-option value="人工">人工</a-select-option>
      <!-- 在这里添加更多的设备组选项 -->
    </a-select>
  </a-form-item>
  <a-form-item has-feedback label="创建时间" :name="['create']" :rules="rules.create">
    <a-date-picker v-model:value="formState.create"  />
  </a-form-item>
  <a-form-item has-feedback label="创建者"  :name="['creator']" :rules="rules.creator">
    <a-input v-model:value="formState.creator" type="text" autocomplete="off" />
  </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <button type="primary" html-type="submit" class="submit" @click.stop="addclick">提交</button>
      <button style="margin-left: 10px" @click="resetForm" class="reset">取消</button>
    </a-form-item>
  </a-form>
    </a-modal>
    
      <a-table :columns="columns" :data-source="tableData" style="margin-top:20px">
    <template #bodyCell="{ column, text , record}">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
       <template v-else-if="column.key === 'action'">
          <span>
          <button type="primary" @click="handleEdit(record)" class="edit">编辑</button>
          <button type="danger" @click="handleDelete(record)" class="delete">删除</button>
        </span>

      </template>
    </template>
  </a-table>
       
  </div>
  

</template>

<script setup lang="ts">
import { ref, reactive,onMounted,defineComponent, computed, CSSProperties, watch, watchEffect  } from 'vue';
import { ElMessdevice, ElMessdeviceBox ,FormInstance, FormRules} from 'element-plus';
import { useDraggable } from '@vueuse/core';
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import {Modal } from 'ant-design-vue';
import moment from 'moment';
import type { Rule } from 'ant-design-vue/es/form';
// 表单验证
interface FormState {
  device: string;
  name: string;
  group:string;
  create:string;
  creator:string
}
 const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
       device: '',
      name: '',
      group:'',
      create:'',
      creator:''
    });
    

    const rules: Record<string, Rule[]> = {
      device: [{ required: true, message: '设备标识不能为空',trigger:'blur' }],
      name: [{ required: true, message: '请选择模板名称',trigger:'change' }],
      group: [{ required: true, message: '选择设备组',trigger:'change' }],
      create:[{ required: true, message: '时间不能为空',trigger:'change' }],
      creator:[{ required: true, message: '请输入创建者',trigger:'blur' }]
    };
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const handleFinish = (values: FormState) => {
      const formattedDate = moment(formState.create).format('YYYY-MM-DD HH:mm:ss');
  tableData.value.push({
        id:tableData.value.length+1,
        device:formState.device ,
      name: formState.name,
      group:formState.group,
      create:formattedDate,
      creator:formState.creator
      })
      visible.value = false;
    console.log(formState.create)
      console.log(values, formState);
    };
    const handleFinishFailed = errors => {
      console.log(errors);
    };
    const resetForm = () => {
      formRef.value.resetFields();
      visible.value = false;
    };
    const handleValidate = () => {
      // console.log(args);
    


    };


const dialogFormVisible = ref(false);
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
// 提示框

   const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    // const handleOk = (e: MouseEvent) => {
    //   console.log(e);
    //   visible.value = false;
    // };



const columns = ref([
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align:"center"
  },
  {
    title: '设备唯一标识',
    dataIndex: 'device',
    key: 'device',
    align:"center"
  },
  {
    title: '设备模板名称',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    align:"center"
  },
  {
    title: '所属设备组',
    dataIndex: 'group',
    key: 'group',
    ellipsis: true,
    align:"center"
  },
  {
    title: '创建时间',
    dataIndex: 'create',
    key: 'create',
    ellipsis: true,
    align:"center"
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    key: 'creator',
    ellipsis: true,
    align:"center"
  },
 {
    title:"操作",
    key:'action',
    align:"center",
    
  }
]);
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
// 删除
const handleDelete = (record)=>{
  console.log(record)
  Modal.confirm({
    title: '确认删除?',
    content: `你确定要删除 ${record.name} 吗？`,
    onOk() {
      // 确认删除
      const index = tableData.value.findIndex(item => item.id === record.id);
      if (index > -1) {
        tableData.value.splice(index, 1);
      }
    },
    onCancel() {
      // 取消删除
    }
  });
}


// const formLabelWidth = '120px';

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
  .addcl{
   width:150px;
   height:50px;
   border:none;
   background:#f5af19;
   cursor: pointer;
   margin-top:52px;
  }
  
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
.delete{
  width:80px;
  height:50px;
  margin-left:10px;
 background:#c31432;
  border:none;
  color:#ffffff;
  cursor: pointer;

}
.edit{
  width:80px;
  height:50px;
   border:none;
   background:#4A00E0;
   color:#ffffff;
   cursor: pointer;
}

}
 .submit{
      width:80px;
  height:50px;
  margin-left:10px;
 background:#4A00E0;
  border:none;
  color:#ffffff;
  cursor: pointer;
  }
  .reset{
     width:80px;
  height:50px;
  margin-left:10px;
 background:#c31432;
  border:none;
  color:#ffffff;
  cursor: pointer;
  }
</style>