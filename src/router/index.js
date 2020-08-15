import { createRouter, createWebHistory } from "vue-router"
import firebase from "firebase"

import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import SignUp from "../views/SignUp.vue"

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  console.log(currentUser, "vatata")
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next("login")
  else if (!requiresAuth && currentUser) next("home")
  else next()
})

export default router
