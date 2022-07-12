<script setup>
import Header from './Header.vue'
</script>

<template>
  <div class="blog">
    <Header />
    <div mt-92px max-w-960px mx-auto my-0>
      <router-view />
    </div>
  </div>
</template>
