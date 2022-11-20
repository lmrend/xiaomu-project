<template>
    <van-cell class="commnet-item">
            <van-image
        slot="icon"
        class="avatar"
        round
        fit="cover"
        :src="commentInfo[0].user_info.avatar_large"
        />
        <div slot="title" class="title-wrap">
            <div class="user-name">{{commentInfo[0].user_info.description}}</div>
            <van-button
            class="like-btn"
            :class="{
                liked: commentInfo[0].comment_info.is_digg
            }"
            :icon="commentInfo[0].comment_info.is_digg ? 'good-job' : 'good-job-o'"
            >
            {{  commentInfo[0].comment_info.digg_count || '赞'}}
            </van-button>
        </div>
        <div slot="label">
            <p class="comment-content">{{commentInfo[0].comment_info.comment_content }}</p>
            
            <div class="bottom-info">
                <span class="comment-pubdate">{{commentInfo[0].comment_info.ctime | relativeTime}}</span>
                <van-button class="reply-btn" round>回复{{commentInfo[0].comment_info.comment_replys.length}}</van-button>
                
            </div>
            <div v-if="commentInfo[0].reply_infos.length" class="reply-box">
                
                <ReplyComment class="reply"  :replyInfo="reply" v-for="reply in commentInfo[0].reply_infos" :key="reply.reply_id"  />
            </div>
            
        </div>
        
    </van-cell>
</template>

<script>
import ReplyComment from '@/components/ReplyComment.vue'
    export default {
        name: "CommentItem",
        components: {
            ReplyComment
        },
        props:{
            commentInfo: {
                type:[Object,Array],
                required:true
            },
        },
        data() {
            return {

                
            }
        }
    }
</script>

<style lang="less" scoped>
.commnet-item{
    .avatar{
        width: 72px;
        height: 72px;
        margin-right: 25px;
    }
    .title-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user-name{
            color: #406599;
            font-size: 26px;
        }
    }
    .commnet-content{
        font-size: 26px;
        color: 222;
        word-break: break-all;
        text-align: justify;
    }
    .comment-pubdate{
        font-size: 19px;
        color: #222;
        margin-right: 25px;
    }
    .bottom-info{
        display: flex;
        align-items: center;
    }
    .reply-box{
        width: 500px;
    }
    .reply-btn{
        width: 135px;
        height: 48px;
        line-height: 48px;
        font-size: 21px;
        color: #222;
    }
    .like-btn{
        width: 50px;
        height: 50px;
        font-size: 20px;
        border: none;
        &.liked{
            color: #e5645f;
        }
    }
    .van-button::before{
        background-color:transparent;
    }
}
</style>