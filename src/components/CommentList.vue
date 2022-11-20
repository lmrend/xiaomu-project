<template>
  <van-list class="comment-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <CommentItem v-for="item in list" :key="item.comment_id" :commentInfo="item.comments" />
  </van-list>
</template>

<script>
import CommentItem from "./CommentItem.vue"
import { getCommentsByArticleId } from "@/assets/fake-api"
export default {
    name: "CommentList",
    components:{
        CommentItem
    },
    props:{
        articleId:{
            type:[Number,String],
            required:true
        }
    },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      offset:0,
      limit:10
    }
  },
  methods: {
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      try {
        let { data } = await getCommentsByArticleId(this.articleId,this.offset,this.limit)
        this.list.push(data)
        // 加载状态结束
        this.loading = false
        
        this.offset++
        if (this.list.length >= 40) {
          this.finished = true;
        }
      } catch (error) {
        console.log(error)
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  }
}
</script>

<style lang="less" scoped>
.comment-list {
  padding-top: 50px;
}
</style>
