<template>
  <div class="comment-post">
    <van-field
  v-model="message"
  rows="2"
  autosize
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
/>
    <van-button class="post-btn" @click="putComment" :disabled="!message.length"> 发布 </van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    }
  },
  methods: {
    putComment() {

    }
  }
}
</script>

<style lang="less" scoped>
.comment-post {
  display: flex;
  align-items: center;
  padding: 32px 0 32px 32px;
  .post-field {
    background-color: #F5F7F9;
  }
  .post-btn {
    width: 150px;
    border: none;
    padding: 0;
    color: #6ba3d8;
    &::before {
      display: none;
    }
  }
}
</style>
