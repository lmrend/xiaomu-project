<template>
  <div class="update-gender">
    <van-picker title="标题" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="$emit('close')" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: "updateGender",
  data() {
    return {
      columns: ["男", "女"],
      gender:''
    }
  },
  methods: {
    onConfirm() {
        this.$emit('changeGender',this.gender)
        this.$emit('close')
    },
    onChange(picker, value) {
        this.gender = value
    }
  }
}
</script>

<style></style>
