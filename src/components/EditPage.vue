<template>
  <div class="edit-container">
    <van-cell :border="false">
      <div slot="title" class="title-text">我的频道</div>
      <van-button round type="danger" plain size="mini" class="edit-btn" @click="isEdit = !isEdit">{{!isEdit ? '编辑' : '完成'}}</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="(category,index) in categories" :key="category.category_id || index" class="grid-item" @click="onCategoty(category,index)">
        <van-icon slot="icon" name="clear" v-show="isEdit && category.category_id>2"></van-icon>
        <span slot="text" class="text" :class="{ active: active === index}">{{ category.category_name }}</span>
      </van-grid-item>
    </van-grid>
    <van-cell :border="false">
      <div slot="title" class="title-text" >频道推荐</div>
    </van-cell>
    <van-grid :gutter="10" direction="horizontal">
      <van-grid-item v-for="category in chooseCatogery" :key="category.category_id" 
      :text="category.category_name" class="grid-item" @click="addCategory(category)">
        <van-icon name="plus" slot="icon" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getAllCategories } from "@/assets/fake-api"
export default {
  name: "EditPage",
  props: {
    categories: {
      type: Array,
      required: true
    },
    active: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
        allCategories:[],
        newcategories:this.categories,
        isEdit:false
    }
  },
  created() {
    this.lodAllCategories()
  },
  methods: {
    async lodAllCategories(){
        try {
          const {data} = await getAllCategories()
          this.allCategories = data.allCategories
        } catch (error) {
            this.$toast('请求所有分类失败')
        }
    },
    addCategory(obj) {
        this.newcategories.push(obj)
    },
    onCategoty(obj,index) {
        if(this.isEdit) {
            if(index<this.active) {
                this.$emit('update-active',this.active-1,true)
            }
            this.newcategories.splice(index,1)
        }
        else{
            this.$emit('update-active',index,false)
        }
    }
  },
  computed: {
    chooseCatogery() {
        return this.allCategories.filter(Category => {
            return !this.categories.find(category => {
                return category.category_id === Category.category_id
            })

        })
    }
  }
}
</script>

<style lang="less" scoped>
.edit-container {
  padding: 85px 0;
  .title-text {
    font-size: 32px;
    color: #333;
  }
  .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #f85959;
    border: 1px solid #f85959;
  }
  /deep/ .grid-item {
    width: 160px;
    height: 86px;
    
    .text {
      font-size: 28px;
      color: #222;
      margin-top: 0;
    }
    .active{
        color: red;
    }
    .van-grid-item__content {
      background-color: #f4f5f6;
      .van-grid-item__text {
        font-size: 28px;
        color: #222;
        margin-top: 0;
      }
      .van-grid-item__icon-wrapper {
        position: static;
        top: -3px;
        left: -4px;
      }
      .van-icon {
        font-size: 28px;
      }
      .van-icon-clear {
        position: absolute;
        right: -7px;
        top: -7px;
        z-index: 2;
      }
    }
  }
}
</style>
