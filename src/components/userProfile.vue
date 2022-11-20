<template>
  <div class="user-profile">
    <van-nav-bar class="page-nav-bar" title="个人信息" left-arrow @click-left="$router.back()"> </van-nav-bar>
    <van-cell title="头像" is-link>
      <van-image width="30" height="30" fit="cover" round src="http://img/yzcdn.cn/vant/cat.jpg"> </van-image>
    </van-cell>
    <van-cell title="昵称" :value="name" is-link @click="showNamePopup"></van-cell>
    <van-cell title="性别" :value="gender" is-link @click="showGenderPopup"></van-cell>
    <van-cell title="生日" :value="birthday" is-link @click="showBirthdayPopup"></van-cell>
    <van-popup style="height: 100%" v-model="isUpdateNameShow" position="bottom">
      <updateName @close="isUpdateNameShow = false" @changeName="changeName"></updateName>
    </van-popup>
    <van-popup v-model="isUpdateGenderShow" position="bottom">
      <updateGender @close="isUpdateGenderShow = false" @changeGender="changeGender"></updateGender>
    </van-popup>
    <van-popup v-model="isUpdateBirthdayShow" position="bottom">
      <updateBirthday @close="isUpdateBirthdayShow = false" @changeBirthday="changeBirthday"></updateBirthday>
    </van-popup>
  </div>
</template>

<script>
import updateName from "@/components/updateName.vue"
import updateGender from "@/components/updateGender.vue"
import updateBirthday from "@/components/updateBirthday.vue"
export default {
  name: "UserProfile",
  components: { updateName, updateGender,updateBirthday },
  data() {
    return {
      isUpdateNameShow: false,
      isUpdateGenderShow: false,
      isUpdateBirthdayShow: false,
      name: "程序员",
      gender: "男",
      birthday: "2001-7-5"
    }
  },
  methods: {
    showNamePopup() {
      this.isUpdateNameShow = true
    },
    showGenderPopup() {
      this.isUpdateGenderShow = true
    },
    showBirthdayPopup() {
      this.isUpdateBirthdayShow = true
    },
    changeName(message) {
      this.name = message
    },
    changeGender(gender) {
      this.gender = gender
    },
    changeBirthday(currentDate) {
        let year = currentDate.getFullYear()
        let mouth = currentDate.getMonth() + 1
        let date = currentDate.getDate()
      this.birthday = `${year}-${mouth}-${date}`
    }
  }
}
</script>

<style>
.van-popup {
  background-color: #f5f7f9;
}
</style>
