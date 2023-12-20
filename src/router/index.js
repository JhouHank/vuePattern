import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/components",
      name: "Components",
      component: () => import("../views/Components.vue"),
    },
    {
      path: "/composables",
      name: "Composables",
      component: () => import("../views/Composables.vue"),
    },
    {
      path: "/container-presentational",
      name: "ContainerPresentational",
      component: () => import("../views/ContainerPresentational.vue"),
    },
    {
      path: "/data-provider",
      name: "DataProvider",
      component: () => import("../views/DataProvider.vue"),
    },
    {
      path: "/dynamic-components",
      name: "DynamicComponents",
      component: () => import("../views/DynamicComponents.vue"),
    },
    {
      path: "/provide-inject",
      name: "ProvideInject",
      component: () => import("../views/ProvideInject.vue"),
    },
    {
      path: "/script-setup",
      name: "ScriptSetup",
      component: () => import("../views/ScriptSetup.vue"),
    },
    {
      path: "/state-management",
      name: "StateManagement",
      component: () => import("../views/StateManagement.vue"),
    },
    {
      path: "/render-functions",
      name: "RenderFunctions",
      component: () => import("../views/RenderFunctions.vue"),
    },
    {
      path: "/renderless-components",
      name: "RenderlessComponents",
      component: () => import("../views/RenderlessComponents.vue"),
    },
    {
      path: "/async-components",
      name: "AsyncComponents",
      component: () => import("../views/AsyncComponents.vue"),
    },
  ],
});

export default router;
