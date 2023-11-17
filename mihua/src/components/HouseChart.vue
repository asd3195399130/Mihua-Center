<!--  -->
<template>
    <div class="">
        <!-- <h2>6666</h2> -->
        <div class="header">
            <div id="bout"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        getData() {
            var myChart = this.$echarts.init(document.getElementById('bout'))
            var option;
            option = {
                backgroundColor: 'white',
                grid: {
                    top: '20%',
                    left: '5%',
                    right: '5%',
                    bottom: '8%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    borderWidth: 1,
                    axisPointer: {
                        type: 'shadow'
                    },
                    extraCssText: 'z-index:2'

                },
                legend: [{
                    top: 'top',
                    left: 'center',
                    orient: 'horizontal',
                    data: ['通话并发数', '线路并发数'],
                    itemWidth: 15,
                    itemHeight: 10,
                    itemGap: 15,
                    borderRadius: 4,
                    textStyle: {
                        color: '#000',
                        fontFamily: 'Alibaba PuHuiTi',
                        fontSize: 14,
                        fontWeight: 400
                    }
                }],
                xAxis: {
                    type: 'category',
                    data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#393939' //X轴文字颜色
                        }
                    }
                },
                yAxis: [

                    {
                        type: 'value',
                        name: '',
                        nameTextStyle: {
                            color: '#000',
                            fontFamily: 'Alibaba PuHuiTi',
                            fontSize: 14,
                            fontWeight: 600
                            // padding: [0, 0, 0, 40], // 四个数字分别为上右下左与原位置距离
                        },
                        nameGap: 30,  // 表现为上下位置
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#eeeeee'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#393939',
                            fontSize: 14
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eeeeee'
                            }
                        }

                    }

                ],
                series: [
                    {
                        name: '通话并发数',
                        type: 'line',
                        showAllSymbol: true, //显示所有图形。
                        //标记的图形为实心圆
                        symbolSize: 8, //标记的大小
                        itemStyle: {
                            //折线拐点标志的样式
                            color: 'white',
                            borderWidth: '2',
                            borderColor: '#5470c6',
                            normal: {
                                color: '#5470c6'//拐点颜色
                            }
                        },
                        lineStyle: {
                            color: '#5470c6'
                        },
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        name: '线路并发数',
                        type: 'line',
                        showAllSymbol: true, //显示所有图形。
                        symbolSize: 8, //标记的大小
                        itemStyle: {
                            //折线拐点标志的样式
                            color: 'white',
                            borderWidth: '2',
                            borderColor: '#91cc75',
                            normal: {
                                color: '#91cc75'//拐点颜色
                            }
                        },
                        lineStyle: {
                            color: '#91cc75'
                        },
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }
                ]
            }
            option && myChart.setOption(option);
        }
    },
    created() {

    },
    mounted() {
        // 获取数据
        this.getData();
    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.header {
    width: 100%;
    height: 100%;
    background: #FFF;

    #bout {
        width: 96%;
        height: 600px;
    }
}
</style>