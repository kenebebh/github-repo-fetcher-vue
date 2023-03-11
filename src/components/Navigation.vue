<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/" active-class="active"> Home </RouterLink>
  <RouterLink to="/repos" active-class="active"> Repos </RouterLink>
</template>

<style scoped>
.active {
  color: green;
}
</style>
