<template>
    <div class="box">
        <img src="../assets/微信截图_20231124135143.png" alt="">
        <router-link to="/test/homeword">首页</router-link>|
        <router-link to="/test/template">模板管理</router-link>|
        <router-link to="">设备管理</router-link>|
        <router-link to="">接入管理</router-link>|
        <router-link to="">数据使用</router-link>|
        <router-link to="">平台运维</router-link>|
        <img src="../assets/微信截图_20231124190448.png" alt="" style="position: absolute;right: 0;">
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
}

.box {
    width: 100%;
    height: 55px;
    background: #183d8c;
    margin: auto;
    line-height: 55px;
    display: flex;
    padding-left: 25px;
    z-index: 5;
    nav {
        width: 150px;
        height: 100%;
        background: #1ecfd7;
    }

    a {
        display: inline-block;
        width: 150px;
        height: 54px;
        color: #cad4e4;
        text-decoration: none;
        background: #1ecfd7;
    }
}
</style>