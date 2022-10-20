<template>
  <div class="atticle-comment" v-html="articleList.article_content">
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import {getArticleById} from '@/assets/fake-api'
export default {
    data() {
      return {
        articleList:[]
      }
    },
    async mounted(){
      const articleList = await getArticleById('6981673766178783262')
      this.$set(this,'articleList',articleList.data.article)
    }
}
</script>

<style>

</style>