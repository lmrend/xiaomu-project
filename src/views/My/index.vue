<template>
  <div class="my-container">
    <div class="header not-login" v-if="!user.user">
      <div class="login-btn" @click="$router.push('/login')">
        <img src="" alt="" class="mobile-image" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <div class="header user-info" v-else>
      <div class="base-info">
        <div class="left">
          <van-image class="avatar" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" round />
          <span class="name">小木</span>
        </div>
        <div class="right">
          <van-button round size="mini">编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">获赞</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
      </div>
    </div>
    <van-grid :column-num="2" class="grid-nav" clickable>
      <van-grid-item text="收藏" class="grid-item">
        <van-icon name="star-o" slot="icon" color="#eb5253" class="icon-size" />
      </van-grid-item>
      <van-grid-item text="历史" class="grid-item">
        <van-icon name="clock-o" slot="icon" color="#ff9d1d" class="icon-size" />
      </van-grid-item>
    </van-grid>
    <van-cell title="消息通知" is-link class="text-left" />
    <van-cell title="小智同学" is-link class="mb-9 text-left" />
    <van-cell title="退出登录" class="logout-cell" @click="onLogout" v-if="user.user" clickable/>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState } from "vuex"

export default {
  name: "MyPage",
  components: {},
  computed: {
    ...mapState(["user"])
  },
  methods: {
    onLogout() {
      this.$dialog.confirm({
        title: "确认退出吗",
      })
        .then(() => {
          // on confirm
          this.$store.commit('setUser',null)
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>
<style lang="less" scoped>
.my-container {
  .header {
    height: 361px;
    background-color: rgb(54, 150, 234);
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mobile-image {
      width: 132px;
      height: 132px;
    }
    .text {
      font-size: 28px;
      color: white;
      padding-top: 20px;
      box-sizing: border-box;
    }
  }
  .user-info {
    .base-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          margin-right: 23px;
          border: 4px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .data-stats {
      display: flex;
      height: 130px;
      .data-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    margin-bottom: 10px;
    .grid-item {
      height: 141px;
      font-size: 28px;
      .icon-size {
        font-size: 56px;
      }
    }
  }
  .text-left {
    text-align: left;
  }
  .logout-cell {
    margin-top: 10px;
    color: red;
  }
}
</style>
