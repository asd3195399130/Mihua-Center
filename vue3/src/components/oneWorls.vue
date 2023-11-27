<template>
  <div class="header">
    <table border="1">
    <thead>
<tr>
      <th>ID</th>
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
     </tr>
    </thead>
     <tbody>
      <tr v-for="item in data" :key='item.id'>
       <td>{{item.id}}</td>
       <td>{{item.姓名}}</td>
       <td>{{item.性别}}</td>
       <td>{{item.年龄}}</td>
      </tr>
     </tbody>
    </table>
    <button @click="handleSort">点击排序</button>

  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, watchEffect } from 'vue';
let data= [
   { id: 10, 姓名: '张三', 性别: '男', 年龄: 28 },
  { id: 5, 姓名: '李四', 性别: '女', 年龄: 24 },
  { id: 17, 姓名: '王五', 性别: '男', 年龄: 32 },
  { id: 3, 姓名: '陈六', 性别: '女', 年龄: 27 },
  { id: 2, 姓名: '赵七', 性别: '女', 年龄: 30 },
  { id: 12, 姓名: '钱八', 性别: '男', 年龄: 29 },
  { id: 19, 姓名: '孙九', 性别: '男', 年龄: 25 },
  { id: 20, 姓名: '周十', 性别: '女', 年龄: 26 },
  { id: 16, 姓名: '吴十一', 性别: '女', 年龄: 31 },
  { id: 7, 姓名: '郑十二', 性别: '男', 年龄: 33 },
  { id: 15, 姓名: '王十三', 性别: '男', 年龄: 28 },
  { id: 13, 姓名: '李十四', 性别: '女', 年龄: 24 },
  { id: 18, 姓名: '张十五', 性别: '女', 年龄: 27 },
  { id: 4, 姓名: '陈十六', 性别: '男', 年龄: 30 },
  { id: 11, 姓名: '赵十七', 性别: '男', 年龄: 29 },
  { id: 1, 姓名: '钱十八', 性别: '女', 年龄: 25 },
  { id: 14, 姓名: '孙十九', 性别: '女', 年龄: 26 },
  { id: 6, 姓名: '周二十', 性别: '男', 年龄: 31 },
  { id: 8, 姓名: '吴二十一', 性别: '男', 年龄: 33 },
  { id: 9, 姓名: '郑二十二', 性别: '女', 年龄: 28 }
]
const sortedData = ref([]);

onBeforeMount(() => {
  sortData();
});

function sortData() {
  sortedData.value = data.sort((a, b) => a.id - b.id);
}


// 点击排序
function handleSort() {
console.log(666);

    sortData();
}

</script>

<style scoped>
table{
width:1200px;
margin:auto
}
</style>