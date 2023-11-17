<!--  -->
<template>
  <div class="">
    <!-- <h6>888</h6> -->

    <div class="header-a">
      <el-button @click="switchcomponent('HelloWorld')" plain type="primary">企业数据</el-button>
      <el-button @click="switchcomponent('serverDate')" plain type="primary">服务器数据</el-button>
      <el-button @click="switchcomponent('ProincalData')" plain type="primary">省份数据</el-button>
    </div>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import serverDate from "../components/serverData.vue";
import ProincalData from "../components/ProincalData.vue";
export default {
  components: {
    HelloWorld,
    serverDate,
    ProincalData,
  },
  data() {
    return {
      componentId: "HelloWorld",
    };
  },
  methods: {
    switchcomponent(component) {
      this.componentId = component;
    },
  },
  created() { },
  mounted() { },
};
</script>

<style lang="less" scoped>
/* @import url(); 引入css类 */
.header-a {
  position: fixed;
  top: 60px;
  width: 100%;
  height: 50px;
  border-top: 1px solid #dcdada;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  padding-top: 5px;
  padding-left: 6px;
  z-index: 1;

  .active {
    background-color: red;
    /* 设置活动按钮的颜色 */
  }
}
</style>