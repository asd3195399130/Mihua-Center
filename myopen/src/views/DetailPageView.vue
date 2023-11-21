<!--  -->
<template>
    <div class="">
        <div class="header">
            <!-- <h3>id:{{ Id }}</h3> -->
            <div class="header-top" @click="exit">
                <i class="el-icon-arrow-left"
                    style="font-size: 16px;color:#fff;margin-top: 15px;margin-left: 10px;font-weight: 500;"></i>
            </div>
            <div style="float: left;width: 95%;">
                <h1>{{ movieData.name }}</h1>
                <!-- <img :src="movieData.imgurl" alt=""> -->
                <!-- <span></span> -->
                <h3>中国大陆.2023</h3>
                <span>{{ movieData.likesnum }}人喜欢</span>
                <span>{{ movieData.pingnum }}人评论</span>
                <p>评分{{ movieData.score }}</p>

            </div>
            <img :src="movieData.imgurl" alt="" style="float: right;">
        </div>

    </div>
</template>

<script>
import { getmoviedetail } from "../api/http";
export default {
    data() {
        return {
            movieData: {},
        }
    },
    methods: {
        exit() {
            this.$router.replace({ name: "home" })
        },
        reading() {
            let Id = this.$route.params.id;
            console.log(Id)
            getmoviedetail(Id).then(res => {
                // console.log(res);
                this.movieData = res.data
                console.log(this.movieData);
            })
        }
    },
    created() {
        this.reading()
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.header {
    width: 100%;
    // height: 100px;


    .header-top {
        height: 50px;
        text-align: left;
        background: #466083;
    }
}
</style>