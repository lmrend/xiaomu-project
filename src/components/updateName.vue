<template>
  <div class="update-name">
    <van-nav-bar class="page-nav-bar" title="设置昵称" left-text="取消" right-text="完成" @click-left="$emit('close')" @click-right="change"> </van-nav-bar>
    <div class="field-wrap">
        <van-field v-model="message" rows="2" autosize type="textarea" maxlength="7" placeholder="请输入需要修改的昵称" show-word-limit />
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateName",
    data() {
        return {
            message:''
        }
    },
    methods: {
        change() {
            this.$emit('changeName',this.message)
            this.$emit('close')
            this.message = ''
        }
    }
}
</script>

<style lang="less" scoped>
.update-name{
    .field-wrap{
        padding: 20px;
    }
}
</style>
