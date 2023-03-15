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
  <div class="background">
    <div class="container">
      <div class="repoName">
        <span> {{ RepoDetails.name }}</span>
      </div>
      <div>
        <label>Description: </label>
        <span>
          {{ RepoDetails.description || "No Description provided" }}
        </span>
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
        <a :href="RepoDetails.svn_url" target="_blank" class="githubLink">
          Github Link
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  padding: 1rem;
  color: #111;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: all 0.2s ease-in;
}
.container:hover {
  transform: scale(1.02);
}
.repoName {
  text-transform: uppercase;

  font-weight: bold;
  padding-bottom: 1rem;
}
.githubLink {
  display: block;
  padding-top: 1rem;
  color: wheat;
  transition: all 0.2s ease-in;
}
.githubLink:hover {
  color: white;
  transform: scale(1.05);
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}
</style>
