<script setup></script>

<template>
  <div class="home" flex>
    <div class="home_left" dark:bg-black-24 bg-white w-700px mr-20px>
      <div class="home_nav" py-15px px-11px flex items-center>
        <a class="nav_item" px-5 cursor-pointer hover:text-indigo-500 transition duration-25 text-sm>推荐</a>
        <a class="nav_center_item" px-5 cursor-pointer hover:text-indigo-500 transition duration-25 text-sm>最新</a>
        <a class="nav_item" px-5 cursor-pointer hover:text-indigo-500 transition duration-25 text-sm>最熱</a>
      </div>
      <div class="list">
        
      </div>
    </div>
    <div class="home_right" dark:bg-black-24 bg-white w-240px>
      <div class="home_nav" py-5 px-4>2</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home_nav {
  border-bottom: 1px solid var(--border-color);
}

.nav_center_item {
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
}
</style>
