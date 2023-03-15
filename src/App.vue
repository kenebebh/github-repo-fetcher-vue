<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <RouterView />
</template>

<style>
html,
body {
  font-family: "Poppins", sans-serif;
  background-color: rosybrown;
}
</style>
