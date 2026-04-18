import { createRouter, createWebHistory } from "vue-router";
import  Accueil from "../pages/Accueil.vue";
import  NotFound  from "../pages/NotFound.vue";

const routes = [
  { path: "/",                component: Accueil },
  { path: "/:pathMatch(.*)*", component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes
})