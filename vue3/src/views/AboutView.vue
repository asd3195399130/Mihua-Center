<template>
  <div class="about">
    <ul>
      <li v-for="item in data" :key="item.id" @click="switcher(item)" >{{ item.name }}</li>
    </ul>
    <div>
      <component :is="newsword"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import oneWorls from '../components/oneWorls.vue';
import FooterH from '../components/FooterH.vue';
import SportView from "../components/SportView.vue"
import { toRefs, reactive,defineProps,ref, } from 'vue';
const newsword = ref<any>(oneWorls)

const components: Record<string, any> = {
 oneWorls,
 FooterH,
 SportView 
};
const switcher = (item:any)=>{
newsword .value = components[item.component] || oneWorls
}
let data = reactive(
  [
    {
      id:1,
      name:"推荐",
      component:"oneWorls"
    },{
      id:2,
      name:"娱乐",
      component:"FooterH"
    },{
      id:3,
      name:"体育",
      component:'SportView'
    },{
      id:4,
      name:"财经"
    },{
      id:5,
      name:"科技"
    },{
      id:6,
      name:"历史"
    },{
      id:7,
      name:"汽车"
    }
  ]
  )

</script>
<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
    
  }
  ul{
    width: 1200px;
    height: 50px;
    text-align: center;
    background: red;
    list-style: none;
    display: flex;
    align-items: center;
    margin: auto;
  }
  li{
    width: 50px;
    height:30px;
    color:#ffffff;
    cursor: pointer;
  }
  li:hover{
    background: gold;
  }
  li.active{
    background:gold
  }
</style>