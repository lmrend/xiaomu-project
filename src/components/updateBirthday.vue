<template>
    <div class="update-gender">
      <van-datetime-picker   v-model="currentDate"
  type="date"
  title="选择生日"
  :min-date="minDate"
  :max-date="maxDate"
   @confirm="onConfirm" @cancel="$emit('close')" />
    </div>
  </template>
  
  <script>
  export default {
    name: "updateBirthday",
    data() {
      return {
        currentDate: new Date(2021,0,17),
        minDate: new Date(2000,0,1),
        maxDate: new Date(2025,10,1),
      }
    },
    methods: {
      onConfirm() {
          this.$emit('changeBirthday',this.currentDate)
          this.$emit('close')
      },
    }
  }
  </script>
  
  <style></style>
  