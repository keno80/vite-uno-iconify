<script setup>
import { toggleDark } from '@/composables/dark'
</script>

<template>
  <div
    h-72px
    bg-white
    bg-opacity-75
    dark:bg-black-36
    backdrop-blur
    backdrop-saturate-5
    fixed
    top-0
    left-0
    w-full
  >
    <div px-32px h-full relative>
      <div
        flex
        h-full
        justify-between
        my-0
        mx-auto
        class="max-w-[calc(1440px-64px)]"
      >
        <div flex-shrink-0 border-b-1 border-transparent>
          <a flex items-center h-full w-full font-semibold>
            <img mr-8px h-24px max-w-full src="../../assets/logo.svg" />
            小小K 的博客
          </a>
        </div>
        <div flex justify-end items-center flex-grow>
          <div>
            <div
              dark:i-carbon-moon
              i-carbon-sun
              cursor-pointer
              @click="toggleDark()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
