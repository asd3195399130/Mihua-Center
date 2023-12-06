<template>
    <div class="heder">
            <el-button type="primary" style="margin-left: 16px;margin-top: 25px;" @click="drawer = true">
        时间轴
      </el-button>
        <div ref="box" style="width: 800px; height: 800px;margin: auto;">
        </div>
         <a-progress :percent="30" />
  <a-progress :percent="50" status="active" />
  <a-progress :percent="70" status="exception" />
  <a-progress :percent="100" />
        <el-drawer
    v-model="drawer"
    title="人生重大事件"
    :direction="direction"
    :before-close="handleClose"
  >
    <el-timeline>
        <el-timeline-item
          v-for="(item, index) in active"
          :key="index"
          :timestamp="item.timestamp"
          placement="top"
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline>
  </el-drawer>
     
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { ElMessageBox } from 'element-plus';
// echarts
const percentage = ref(20);
const customColor = ref("409eff");
const drawer = ref(false)
const active = [
    {
        content:"我出生了",
        timestamp:"2001-10-29"
        
    },{
        content:"我上小学了",
        timestamp:"2007-09-01"
    },{
        content:"我上初中了",
        timestamp:"2013-09-01",
    },{
        content:"我上高中了",
        timestamp:"2016-09-01",
    },{
        content:"我参加高考",
        timestamp:"2020-06-07",
    },{
        content:"我上大学了",
        timestamp:"2020-09-01",
    },{
        content:"大学毕业",
        timestamp:"2023-07-01",
    },{
        content:"买车",
        timestamp:"2025-10-25",
    }]
const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
const direction = ref("ttb")
const box = ref(null);
const myChart = ref(null);
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('是否关闭此页面?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
onMounted(() => {
    setInterval(() => {
        percentage.value = (percentage.value % 100) + 10
    }, 500)
    myChart.value = echarts.init(box.value);
    var option;

 myChart.value.showLoading();
    myChart.value.hideLoading();
    
 var   data =  {"nodes":[
{"name":"奥特科创圆"},
{"name":"1路车站"},
{"name":"碧桂园"},
{"name":"郑州西站"},
{"name":"中原路"},
{"name":"吾悦广场"}
],
"links":[
{"source": "奥特科创圆", "target": "1路车站",  "value": 1.1},
{"source": "1路车站", "target": "碧桂园",  "value": 0.8},
{"source": "1路车站",  "target": "郑州西站",  "value": 2},
{"source": "1路车站",  "target": "中原路",  "value": 1.2},
{"source": "吾悦广场", "target": "1路车站",  "value": 2.9},
]}


    myChart.value.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                nodeGap:100,
                nodeWidth: 50,
                type: 'sankey',
                data: data.nodes,
                links: data.links,
                focusNodeAdjacency: 'allEdges',
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.5
                    }
                }
            }
        ]
    });
    myChart.value.setOption(option);
});
</script>

<style scoped lang="less">
.heder {
    width: 100%;
    height: 100vh;
    border-top: 3px solid #224691;
   background: -webkit-linear-gradient(to bottom,#375595,#56417a,#4e3a7a,#152874);
     /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to bottom,#375595,#56417a,#4e3a7a,#152874);

    .el-progress--line {
        margin-bottom: 15px;
        width: 350px;
        color:red;
    }
}
</style>