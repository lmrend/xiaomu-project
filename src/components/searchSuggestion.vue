<template>
  <div class="suggestion-container">
    <van-cell title="asda" icon="search"></van-cell>
    <van-cell title="asda" icon="search"></van-cell>
    <van-cell title="asda" icon="search"></van-cell>
    <van-cell title="asda" icon="search"></van-cell>
    <van-cell title="asda" icon="search"></van-cell>
  </div>
</template>

<script>
export default {
    name: "searchSuggestion",
    data() {
        return {
            value: ''
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    .suggestion-container{
        .van-search{
            .van-search__action{
                color: #fff;
            }
            
        }
    }
</style>