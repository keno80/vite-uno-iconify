<script setup>
import { toggleDark } from './composables/dark'
</script>

<template>
  <div cursor-pointer i-carbon-sun dark:i-carbon-moon @click="toggleDark()" />
</template>

<style></style>
