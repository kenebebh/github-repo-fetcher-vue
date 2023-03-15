<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Pagination from "./Pagination.vue";

const router = useRouter();

const AllRepos = ref([]);
const loading = ref(true);
const page = ref(1);
const totalPages = ref(5);
const perPage = ref(10);

// Set dynamic repos per page value according to screen size
const dynamicPerPage = ref(3);
// Implement pagination
const currentPage = ref(1);
const reposPerPage = computed(() => dynamicPerPage.value);
const indexOfLastRepo = computed(() => currentPage.value * reposPerPage.value);
const indexOfFirstRepo = computed(
  () => indexOfLastRepo.value - reposPerPage.value
);
const currentRepos = computed(() =>
  repos.value.slice(indexOfFirstRepo.value, indexOfLastRepo.value)
);
const paginate = (pageNumber) => {
  page.value = pageNumber;
  fetchRepos();
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

const fetchRepos = async () => {
  loading.value = true;
  try {
    const response = await fetch(
      `https://api.github.com/users/kenebebh/repos?page=${page.value}&per_page=${perPage.value}`
    );
    AllRepos.value = await response.json();
    totalPages.value = Math.ceil(AllRepos.value.length / perPage.value);
  } catch (error) {
    error.value = error.toString();
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchRepos();
});
</script>

<template>
  <div class="container">
    <div
      v-for="repo in AllRepos"
      :key="repo.id"
      @click="router.push(`/repos/${repo.name}`)"
      class="repoContainer"
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
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.repoContainer {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  width: 70%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in;
}
.repoContainer:hover {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  color: whitesmoke;
  cursor: pointer;
  transform: scale(1.02);
}
</style>
