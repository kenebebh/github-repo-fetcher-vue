<!-- https://api.github.com/repos/${username}/${repoName} -->
<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";

const route = useRoute();
const { repoName } = route.params;
const RepoDetails = ref([]);

onMounted(() => {
  axios
    .get(`https://api.github.com/repos/kenebebh/${repoName}`)
    .then((response) => {
      RepoDetails.value = response.data;
    });
  console.log(RepoDetails);
});
</script>

<template>
  <div>
    <div>
      <span> {{ RepoDetails.name }}</span>
    </div>
    <div>
      <label>Description: </label>
      <span> {{ RepoDetails.description || "No Description provided" }} </span>
    </div>
    <div>
      <label>Created at </label>
      <span>
        {{
          Object.keys(RepoDetails).length !== 0
            ? new Date(RepoDetails.created_at).toDateString()
            : " "
        }}
      </span>
      <label> || Last Updated at </label>
      <span>
        {{
          Object.keys(RepoDetails).length !== 0
            ? new Date(RepoDetails.updated_at).toDateString()
            : " "
        }}
      </span>
    </div>
    <div>
      <label>Primary Language: </label>
      <span>{{ RepoDetails.language }}</span>
    </div>
    <div>
      <a :href="RepoDetails.svn_url" target="_blank"> Github Link </a>
    </div>
  </div>
  
  
</template>
