import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
      meta: {
        layout: "empty",
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
