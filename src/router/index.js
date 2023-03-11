import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReposView from "../views/ReposView.vue";
import RepoDetails from "../views/RepoDetailsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/repos",
      name: "repos",
      component: ReposView,
    },
    {
      path: "/repos/:repoName",
      name: "repo",
      component: RepoDetails,
    },
    {
      path: "/:invalidRoute(.*)*",
      name: "notFound",
      component: NotFoundView,
    },
  ],
});

export default router;
