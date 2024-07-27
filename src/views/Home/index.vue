<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePanel title="新鲜好物" subTitle="新鲜好物 品质可靠">
    <div>插槽内容</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="新鲜好物 品质可靠">
    <div>插槽内容</div>
  </HomePanel>
</template>
