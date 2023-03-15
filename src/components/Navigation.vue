<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/" active-class="active" class="link"> Home </RouterLink>
    <RouterLink to="/repos" active-class="active" class="link">
      Repos
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  background-color: #222;
  display: flex;
  justify-content: space-around;
  padding: 0.8rem 0 1rem;
}
.active {
  color: royalblue;
  text-decoration: double;
  text-decoration-color: red;
}
.link {
  text-decoration: none;
}
</style>
