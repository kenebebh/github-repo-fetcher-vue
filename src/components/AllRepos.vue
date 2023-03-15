<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Pagination from "./Pagination.vue";

const router = useRouter();
const AllRepos = ref([]);

onMounted(() => {
  axios
    .get(
      `https://api.github.com/users/kenebebh/repos?page=${page.value}&per_page=${perPage.value}`
    )
    .then((response) => {
      AllRepos.value = response.data;
      totalPages.value = Math.ceil(AllRepos.value.length / perPage.value);
    });
});

const page = ref(1);
const totalPages = ref(1);
const perPage = ref(10);

// Set dynamic repos per page value according to screen size
const dynamicPerPage = ref(window.innerWidth <= 768 ? 3 : 6);
// Implement pagination
const currentPage = ref(1);
const reposPerPage = computed(() => dynamicPerPage.value);
const indexOfLastRepo = computed(() => currentPage.value * reposPerPage.value);
const indexOfFirstRepo = computed(
  () => indexOfLastRepo.value - reposPerPage.value
);
const paginate = (pageNumber) => {
  currentPage.value = pageNumber;
};
const pageNumbers = computed(() => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(AllRepos.value.length / reposPerPage.value);
    i++
  ) {
    pageNumbers.push(i);
  }
  return pageNumbers;
});
</script>

<template>
  <div
    v-for="repo in AllRepos"
    :key="repo.id"
    @click="router.push(`/repos/${repo.name}`)"
  >
    {{ repo.name }}
  </div>
  <Pagination
    :repos="AllRepos"
    :currentPage="currentPage"
    :reposPerPage="reposPerPage"
    :pageNumbers="pageNumbers"
    :paginate="paginate"
  />
</template>

<style scoped></style>
