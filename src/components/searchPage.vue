<template>
  <div class="search-container">
    <form action="/">
  <van-search
    v-model="value"
    show-action
    autofocus
    background="#3296fa"
    placeholder="请输入搜索关键词"
    @focus="isResultShow = false"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<SearchResult v-if="isResultShow"></SearchResult>
<SearchHistory v-else-if="!value"></SearchHistory>
<SearchSuggestion v-else></SearchSuggestion>
  </div>
</template>

<script>
import SearchResult from '@/components/searchResult.vue'
import SearchHistory from '@/components/searchHistory.vue'
import SearchSuggestion from '@/components/searchSuggestion'
export default {
    name: "searchPage",
    components: {
        SearchResult,
        SearchHistory,
        SearchSuggestion,
    },
    data() {
        return {
            value: '',
            isResultShow:false
        }
    },
    methods: {
        onSearch() {
            this.isResultShow = true
        },
        onCancel() {
            this.$router.back()
        }
    }
}
</script>

<style lang="less" scoped>
    .search-container{
        .van-search{
            .van-search__action{
                color: #fff;
            }
            
        }
    }
</style>