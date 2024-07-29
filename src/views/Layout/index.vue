<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores'
const categoryStore = useCategoryStore()
categoryStore.getCategoryList()
</script>

<template>
  <!-- <LayoutFixed :categoryList="categoryStore.categoryList" /> -->
  <LayoutFixed />
  <LayoutNav />
  <!-- <LayoutHeader :categoryList="categoryStore.categoryList" /> -->
  <LayoutHeader />
  <!-- 二级路由出口 -->
  <!-- 添加key 破坏复用机制 强制销毁重建-->
  <!-- <router-view :key="$route.fullPath"></router-view> -->
  <router-view></router-view>
  <LayoutFooter />
</template>
