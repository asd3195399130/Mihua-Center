<template>
    <div class="heder">
            <el-button type="primary" style="margin-left: 16px;margin-top: 25px;" @click="drawer = true">
        时间轴
      </el-button>
        <div ref="box" style="width: 1500px; height: 1200px;margin: auto;">
        </div>
        <el-progress :percentage="percentage" :color="customColor" /> 
        <el-progress :percentage="percentage" :color="customColors" />
        <el-progress :percentage="percentage" :color="customColorMethod" />
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

    let colors = ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#5470C6'];
    let mydata = [
        { name: 'L1', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-1', itemStyle: { color: colors[0] }, depth: 0 },



        { name: 'L2', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-1', itemStyle: { color: colors[1] }, depth: 1 },



        { name: 'L3', itemStyle: { color: colors[2] }, depth: 2 },




    ];
    // mydata.reverse()
    let mylinks = [
        // L1→L3	 4509
        { source: 'L1', target: 'L3', value: 4509 },
        // L2→L3	 12196
        { source: 'L2', target: 'L3', value: 12196 },
        // L1→L2→L3	 2404
        { source: 'L1-1', target: 'L2-1', value: 2404 },
        { source: 'L2-1', target: 'L3', value: 2404 },


    ];
    option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
        },
        series: {
            type: 'sankey',
            lineStyle: {
                opacity: 0.3,
                color: 'gradient',
                curveness: 0.7,
            },
            // nodeAlign: 'left',
            nodeGap: 18,
            layoutIterations: 1,
            emphasis: {
                focus: 'adjacency',
            },
            data: mydata,
            links: mylinks,
        },
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.value.setOption(option);
});
</script>

<style scoped lang="less">
.heder {
    width: 100%;
    height: 100%;
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