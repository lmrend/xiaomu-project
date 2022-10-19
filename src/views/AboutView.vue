<template>
  <div class="about">
    <h1>This is an about page</h1>
      <span @click="gonum">传参</span>------------------
      <span @click="getArticleInfo">发起请求</span>
      --------------------
      <span @click="getCategories">发起请求</span>
      <button @click="getArticles">获取文章列表</button>
      <router-view></router-view>
  </div>
</template>
<script>

import {getCategories,getArticles} from '@/assets/fake-api'
export default {
  data() {
    return {
      articleList:[],
      Categories:[],
      Articles:[]
    }
  },
  methods:{
    gonum() {
      this.$router.push({
        name:'home',
        query:{
          id:1,
          max:5
        }
      })
    },
    async getArticleInfo() {
      
      
      this.$router.push('article')
    },
    async getCategories() {
      const Categories = await getCategories()
      console.log(Categories)
    },
    async getArticles() {
      const Articles = await getArticles(0)
      console.log(Articles) 
    }
  }
}
</script>