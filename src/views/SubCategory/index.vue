<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/api/category'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const route = useRoute()

// 获取面包屑导航数据
const categoryData = ref({})
const getCategoryData = async () => {
  const res = await getCategoryFilterAPI({ id: route.params.id })
  categoryData.value = res.result
}
getCategoryData()

// 获取基础列表数据
const goodList = ref([])
const data = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async () => {
  const res = await getSubCategoryAPI(data.value)
  goodList.value = [...goodList.value, ...res.result.items]
  if (res.result.counts === goodList.value.length) {
    // 停止监听
    loading.value = true
  }
}
getGoodList()
// 切换tabs
const tabChange = (e) => {
  // console.log(e, data.value.sortField)
  data.value.page = 1
  loading.value = false
  getGoodList()
}

const loading = ref(false)
// 触底加载事件
const load = () => {
  // console.log('触底了')
  // 获取下一页的数据
  data.value.page++
  getGoodList()
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }"
          >{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="loading"
      >
        <!-- 商品列表-->
        <GoodsItem v-for="item in goodList" :key="item.id" :goods="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
