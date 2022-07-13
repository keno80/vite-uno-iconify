<script setup>
import { ref } from 'vue'

const skeleton = ref(false)

setTimeout(() => {
  skeleton.value = true
}, 1500)
</script>

<template>
  <div class="home" flex>
    <div class="home_left" dark:bg-black-24 bg-white w-700px mr-20px>
      <div class="home_nav bt-1" py-15px px-11px flex items-center>
        <a class="nav_item" px-5 cursor-pointer hover:text-indigo-500 transition duration-25 text-sm>推荐</a>
        <a class="nav_center_item bx-1" px-5 cursor-pointer hover:text-indigo-500 transition duration-25 text-sm>最新</a>
        <a class="nav_item" px-5 cursor-pointer hover:text-indigo-500 transition duration-25 text-sm>最熱</a>
      </div>
      <div class="list" v-if="skeleton">
        <div class="list_item" flex flex-col px-20px pt-15px text-sm v-for="item in 10" :key="item">
          <div class="list_title" flex items-center>
            <a mr-4 cursor-pointer hover:text-indigo-500 transition duration-25>作者名</a>
            <div class="nav_center_item bx-1" px-4>发布时间</div>
            <div>
              <a px-3 cursor-pointer hover:text-indigo-500 transition duration-25>分类</a>
              <a px-3 cursor-pointer hover:text-indigo-500 transition duration-25>分类</a>
              <a px-3 cursor-pointer hover:text-indigo-500 transition duration-25>分类</a>
            </div>
          </div>
          <div class="list_content bt-1" mt-10px pb-15px>
            <div class="left_content">
              <div class="content_title" mb-8px>
                <a text-base cursor-pointer hover:text-indigo-500 transition duration-25 font-bold>这是内容标题</a>
              </div>
              <div class="content_title" text-gray-500 dark:text-current>这是内容</div>
            </div>
            <div class="right_content"></div>
          </div>
        </div>
      </div>
      <el-skeleton animated px-20px py-15px style="width: 660px!important" v-else />
    </div>
    <div class="home_right" dark:bg-black-24 bg-white w-240px>
      <div class="home_nav" py-5 px-4>2</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bt-1 {
  border-bottom: 1px solid var(--border-color);
}

.bx-1 {
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
}
</style>
