import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Auth/Register";
import InstallerAccount from "./views/InstallerAccount"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { name: "register", path: "/register", component: Register },
    { name: "installer-account", path: "/installer-account", component: InstallerAccount },
    { name: "installer-profile", path: "/installer-account/profile", component: InstallerAccount, props: {activeBlock: "Profile"}},
    { name: "installer-points", path: "/installer-account/points", component: InstallerAccount, props: {activeBlock: "Points"}}
  ]
});
