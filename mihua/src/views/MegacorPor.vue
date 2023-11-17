<!--  -->
<template>
    <div class="">
        <!-- <img src="../assets/微信截图_20231117113356.png" alt=""> -->
        <div class="header">
            <ul>
                <li>
                    <img src="../assets/微信截图_20231117114602.png" alt="">
                    <p class="num">1</p>
                    <p class="title">子企业个数</p>
                </li>
                <li>
                    <img src="../assets/微信截图_20231117114624.png" alt="">
                    <p class="num">100</p>
                    <p class="title">最大座席数</p>
                </li>
                <li>
                    <img src="../assets/微信截图_20231117114634.png" alt="">
                    <p class="num">1</p>
                    <p class="title">实际座席数</p>
                </li>
                <li>
                    <img src="../assets/微信截图_20231117114651.png" alt="">
                    <p class="num">0</p>
                    <p class="title">停用座席数</p>
                </li>
                <li>
                    <img src="../assets/微信截图_20231117114700.png" alt="">
                    <p class="num">100</p>
                    <p class="title">最大登录总数</p>
                </li>
                <li>
                    <img src="../assets/微信截图_20231117114709.png" alt="">
                    <p class="num">0</p>
                    <p class="title">预测试外呼坐席并发总数</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // props: ["superlist"],
    data() {
        return {
            // superlist: ""

        }
    },
    created() {
        // this.superlist = this.$route.query.params
        // console.log(this.superlist);
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
    list-style: none;
}

.header {
    // width: 95%;
    // height: 500px;
    background: #fcfcfc;
    margin: auto;
    position: relative;
    top: 20px;

    ul {
        display: flex;
        align-items: center;
    }

    li {
        width: 50%;
        // height: 90px;
        // border: 1px solid red;

        .num {
            color: #000;
            font-size: 30px;
            font-weight: 600;
        }

        .title {

            color: #ccc;
            font-size: 20px;
            font-weight: 600;
        }

        img {
            width: 150px;
            height: 150px;
        }
    }
}
</style>