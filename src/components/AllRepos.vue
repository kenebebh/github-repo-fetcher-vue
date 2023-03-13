<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const AllRepos = ref([]);
const getData = async () => {
  return fetch("https://api.github.com/users/kenebebh/repos").then((response) =>
    response.json()
  );
};

onMounted(() => {
  axios.get("https://api.github.com/users/kenebebh/repos").then((response) => {
    AllRepos.value = response.data;
  });
});
</script>

<template>
  <div v-for="repo in AllRepos" :key="repo.id">
    {{ repo.name }}
  </div>
</template>

<style scoped></style>
