<template>
  <div>
    <button @click="currentPage = 'home'" :class="{'reanthe':currentPage==='home' }">看攻略</button>
    <button @click="currentPage = 'about'" :class="{'reanthe':currentPage==='about' }">做行程</button> 
    <button @click="currentPage = 'contact'" :class="{'special':currentPage==='contact' }">特价酒店</button>

    <div v-if="currentPage === 'home'" class="page home">
      <h1>查看攻略</h1>
      <!-- 此处放置首页内容 -->
    </div>

    <div v-else-if="currentPage === 'about'" class="page about">
      <h1>About Page</h1>
      <!-- 此处放置关于页面内容 -->
    </div>

    <div v-else-if="currentPage === 'contact'" class="page contact">
      <h1>Contact Page</h1>
      <!-- 此处放置联系页面内容 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const currentPage = ref('home');
</script>

<style lang="less" scoped>
/* @import url(); 引入css类 */

button {
  width: 264px;
  height: 52px;
  text-align: center;
  font: 300 20px/52px PingFangSC-light;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: gold;
  transition: color 0.5s linear;
  cursor: pointer;
  border:none
}

button:active {
  background-color: yellow; /* 这里填入你想要的点击后的背景颜色 */
}

.page {
    height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home {
  background-image: linear-gradient(120deg, #5eb67f 0%, #8fd3f4 100%);
}

.about {
  background-color: pink; /* 这里填入关于页面的背景颜色 */
}

.contact {
  background-color: rgba(83,144,250,0.8);; /* 这里填入联系页面的背景颜色 */
}
.reanthe{
    color:#fff;
    font-weight: 600;
    background-color:transparent ;
    background: rgba(40,213,164,.8);
}
.special{
     color:#fff;
    font-weight: 600;
    background-color:transparent ;
    background: rgba(83,144,250,0.8);
}
</style>
