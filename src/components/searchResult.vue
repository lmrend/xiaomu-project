<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell title="asdads" />
  </van-list>
</template>

<script>
export default {
  name: "searchResult",
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad(){

    }
  }
}
</script>

<style lang="less" scoped>
.result-container {
  .van-search {
    .van-search__action {
      color: #fff;
    }
  }
}
</style>
