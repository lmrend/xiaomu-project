<template>
  <div class="article-container">
    <van-nav-bar class="pagr-nav-bar" fixed title="文章详情" left-arrow @click-left="$router.back()">
      
    </van-nav-bar>
    <h5>{{articleList.article_info.title}}</h5>
    <div class="atticle-comment" v-html="articleList.article_content">
    
  </div>
  <span class="text-end">正文结束</span>
  <div class="addComment-box">
    <van-button
    class="comment-btn"
    type="default"
    @click="addShow = true"
    >
    添加评论
    </van-button>
  </div>
  <CommentList :articleId="articleList.article_id"></CommentList>
  <van-popup
  v-model="addShow"
  position="bottom"
  class="addComment">
  <CommentPost></CommentPost>
  </van-popup>
  </div>
</template>

<script>
import CommentPost from '@/components/CommentPost.vue'
import CommentList from '@/components/CommentList.vue'
import {getArticleById} from '@/assets/fake-api'
export default {
    name: 'ArticlePage',
    components: {
      CommentList,
      CommentPost
    },
    props:{
      article_id:{
        type:[Number,String],
        requireds:true
      }
    },
    data() {
      return {
        articleList:[],
        addShow:false
      }
    },
    created() {
      
    },
    async mounted(){
      const articleList = await getArticleById(this.article_id)
      this.$set(this,'articleList',articleList.data.article)
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>

.article-container{
  padding: 80px 10px 0px 10px;
  .text-end{
    font-size: 30px;
    color:rgba(157, 155, 155, 0.865);
  }
  .addComment-box{
    padding: 20px 0;
    .comment-btn{
      width: 100%;
      color:rgba(157, 155, 155, 0.865);
    }
  }
  .addComment{
    height: 200px;
  }
  .atticle-comment{
    margin: 80px 0;
  }
}

</style>