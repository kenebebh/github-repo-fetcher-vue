<script setup>
import AllRepos from "../components/AllRepos.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <AllRepos />
    </template>
    <template #fallbback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<style scoped></style>
