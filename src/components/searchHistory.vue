<template>
  <div class="history-container">
    <van-cell title="44">
        <span>asda</span>
        <span>dada</span>
        <van-icon name="delete"></van-icon>
    </van-cell>
    <van-cell title="44">
        <van-icon name="close"></van-icon>
    </van-cell>
    <van-cell title="44"></van-cell>
    <van-cell title="44"></van-cell>
  </div>
</template>

<script>
export default {
    name: "searchHistpry",
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
    .history-container{
        .van-search{
            .van-search__action{
                color: #fff;
            }
            
        }
    }
</style>