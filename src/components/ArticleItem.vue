<template>
  <van-cell class="Article-container" :to="`/article/${article.article_id}`">
    
    <div slot="title" class="title van-multi-ellipsis--l2" >{{article.article_info.title}}</div>
    <div slot="label" class="lable">
        <div class="lable-info-wrap">
            <span>{{article.author_user_info.company}}</span>
            <span>{{article.article_info.comment_count}}评论</span>
            <span>{{article.article_info.ctime | relativeTime}}</span>
        </div>
    </div>
    <div slot="default"></div>
    <van-image referrerPolicy="no-referrer" class="right-cover" 
    :src="article.article_info.cover_image"
    lazy-load
    fit="contain" v-if="article.article_info.cover_image !== ''">
    </van-image>
  </van-cell>
</template>

<script>
export default {
    name: 'ArtileItem',
    props:{
        article: {
            type:Object,
            required:true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    .Article-container{
        .title{
            font-size: 32px;
            color:#3a3a3a
        }
        .van-cell__value{
            flex: unset;
            width: 232px;
            height: 146px;
            padding-left: 25px;
        }
        .right-cover{
            width: 232px;
            height: 146px;
        }
        .lable-info-wrap span{
            font-size: 22px;
            color:#b4b4b4;
            margin-right: 25px;
        }
    }
</style>