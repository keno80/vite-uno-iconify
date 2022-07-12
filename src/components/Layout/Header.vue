<script setup>
import { toggleDark } from '@/composables/dark'
</script>

<template>
  <div h-72px bg-white bg-opacity-75 dark:bg-black-36 backdrop-blur backdrop-saturate-5 fixed top-0 left-0 w-full
    class="nav">
    <div px-32px h-full relative class="navbar">
      <div flex h-full justify-between my-0 mx-auto class="max-w-[calc(1440px-64px)] nav_container">
        <div flex-shrink-0 border-b-1 border-transparent class="title">
          <a flex items-center h-full w-full font-semibold>
            <img mr-8px h-24px max-w-full src="../../assets/logo.svg" />
            小小K 的博客
          </a>
        </div>
        <div flex justify-end items-center flex-grow class="content">
          <div flex items-center justify-center class="-mr-8px">
            <div px-6px dark:i-carbon-moon i-carbon-sun cursor-pointer @click="toggleDark()" />
            <div px-6px i-carbon-logo-github cursor-pointer title="GitHub" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 导航元素大于2时启用
// .content {
//   &::before {
//     margin-right: 8px;
//     margin-left: 8px;
//     width: 1px;
//     height: 24px;
//     background-color: #5454547a;
//     content: '';
//   }
// }
</style>
