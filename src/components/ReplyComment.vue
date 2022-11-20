<template>
    <van-cell class="commnet-item">
            <van-image
        slot="icon"
        class="avatar"
        round
        fit="cover"
        :src="replyInfo.user_info.avatar_large"
        />
        
        <div slot="title" class="title-wrap">
            <div class="user-name">{{ replyInfo.user_info.description}}</div>
            <van-button
            class="like-btn"
            :class="{
                liked: replyInfo.reply_info.burry_count
            }"
            :icon="replyInfo.reply_info.burry_count ? 'good-job' : 'good-job-o'"
            >
            {{  replyInfo.reply_info.digg_count || '赞'}}
            </van-button>
        </div>
        <div slot="label">
            <p class="comment-content">{{ replyInfo.reply_info.reply_content}}</p>
            
            <div class="bottom-info">
                <span class="comment-pubdate">{{replyInfo.reply_info.ctime | relativeTime}}</span>
                <van-button class="reply-btn" round>回复</van-button>
                
            </div>
            
        </div>
    </van-cell>
</template>

<script>
    export default {
        name: "ReplyComment",
        components: {
           
        },
        props:{
            replyInfo: {
                type:[Object,Array],
                required:true

            }
        },
        data() {
            return {

                
            }
        }
    }
</script>

<style lang="less" scoped>
.commnet-item{
    background-color: rgb(242, 239, 239);
    
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
        background-color: antiquewhite;
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