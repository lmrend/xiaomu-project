<template>
  <div class="layout-container">
    <router-view/>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/wenda">问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/about">视频</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  data() {
    return {
        active: 0,
    }
  },
}
</script>

<style></style>
