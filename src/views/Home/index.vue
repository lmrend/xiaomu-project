<template>
  <div class="home-container">
    <van-nav-bar class="pagr-nav-bar" fixed>
      <van-button slot="title" type="info" text="搜索" icon="search" class="search-btn" round size="mini" @click="$router.push('/search')"></van-button>
    </van-nav-bar>
    <van-tabs v-model="active" animated swipeable class="change-tabs">
      <van-tab :title="category.category_name" v-for="category in categories" :key="category.category_id" >
        <ArticleList :categoryId="category.category_id"> </ArticleList>
      </van-tab>
      <div slot="nav-right" class="placeholder"></div>
      <div slot="nav-right" class="hamburger-btn" @click="isEditShow = true">
        <van-icon name="font-o" />
      </div>
    </van-tabs>
    <van-popup v-model="isEditShow" closeable position="bottom" class="edit" close-icon-position="top-right">
      <EditPage :categories="categories" :active="active" @update-active="onUpdateActive"></EditPage>
      </van-popup>
  </div>
</template>

<script>
import EditPage from "@/components/EditPage.vue"
import ArticleList from "@/components/ArticleList.vue"
import { getCategories } from "@/assets/fake-api"
export default {
  name: "HpmePage",
  components: {
    ArticleList,
    EditPage
},
  data() {
    return {
      active: 0,
      categories: [],
      isEditShow:false
    }
  },
  created() {
    this.loadCategories()
  },
  methods: {
    async loadCategories() {
      try {
        const { data } = await getCategories()
        this.categories = data.categories
      } catch (err) {
        this.$toast("获取频道失败")
      }
    },
    onUpdateActive(index,isEditShow = true) {
      this.active = index
      this.isEditShow = isEditShow
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 80px;
  /deep/ .van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }
  /deep/ .change-tabs {
    padding-top: 100px;
    .van-tabs__wrap {
      position: fixed;
      top: 92px;
      z-index: 1;
      left: 0;
      right: 0;
      height: 82px;
    }
    .van-tab {
      min-width: 200px;
      border-right: 1px solid #edeff3;
      color: #777;
    }
    .van-tab:active {
      color: #333;
    }
    .van-tabs__nav {
      padding-bottom: 0;
    }
    .van-tabs__line {
      bottom: 8px;
      width: 31px;
      height: 6px;
      background-color: #3296fa;
    }
    .placeholder {
      content: "";
      width: 66px;
      height: 82px;
      flex-shrink: 0;
    }
    .hamburger-btn {
      position: fixed;
      right: 0;
      width: 66px;
      height: 82px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      opacity: 0.902;
      .van-icon {
        font-size: 40px;
      }
    }
  }
  .edit{
    height: 100%;
  }
}
</style>
