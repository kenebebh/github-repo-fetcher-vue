<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <RouterView />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  font-family: "Poppins", sans-serif;
  background-color: #218846;
}
</style>
