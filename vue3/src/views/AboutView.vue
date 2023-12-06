<template>
  <div>
 <a-button v-model:value="buttonValue" @click="handleClick">按钮</a-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
 const buttonValue = ref(''); // 使用ref函数创建响应式数据

    const handleClick = () => {
      console.log(buttonValue.value); // 使用.value访问ref对象的值
    };
</script>

<style scoped>

</style>