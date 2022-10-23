<template>
  <div class="ArticleList-container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-duration="1000" :success-text="successText">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :error.sync="error" error-text="请求失败，点击重新加载">
        <ArtileItem v-for="(article, index) in list" :key="index" :article="article" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArtileItem from "@/components/ArticleItem.vue"
import { getArticles } from "@/assets/fake-api"
export default {
  name: "ArticleList",
  components: {ArtileItem},
  props: ["categoryId"],
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: 0,
      error: false,
      refreshing:false,
      successText:''
    }
  },
  methods: {
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      try {
        const { data } = await getArticles(this.categoryId, "hot", this.offset, 10)
        const result = data.articles
        this.list.push(...result)
        // 加载状态结束
        this.loading = false
        if (result.length) {
          this.offset++
        } else {
          this.finished = true
        }
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      } catch (error) {
        this.error = true
        this.loading = false
      }
    },
    async onRefresh() {
      try {
        const { data } = await getArticles(this.categoryId, "new",this.offset,10)
        const result = data.articles
        console.log(result)
        this.list.unshift(...result)
        this.successText = '刷新成功'
        this.refreshing = false
      } catch (error) {
        this.successText = '刷新失败'
        this.refreshing = false
      }
      

      
      
    }
  }
}
</script>

<style lang="less" scoped>
.ArticleList-container{
  height: 79vh;
  overflow: auto;
}
</style>

