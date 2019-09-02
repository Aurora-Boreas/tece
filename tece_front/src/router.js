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
    { name: "installer-points", path: "/installer-account/points", component: InstallerAccount, props: {activeBlock: "Points"}},
    { name: "installer-constructions", path: "/installer-account/constructions", component: InstallerAccount, props: {activeBlock: "MyConstructions"}},
    { name: "installer-insurance", path: "/installer-account/insurance", component: InstallerAccount, props: {activeBlock: "Insurance"}},
    { name: "installer-portfolio", path: "/installer-account/portfolio", component: InstallerAccount, props: {activeBlock: "Portfolio"}},
    { name: "installer-catalogue", path: "/installer-account/catalogue", component: InstallerAccount, props: {activeBlock: "Catalogue"}},
    { name: "installer-news", path: "/installer-account/news", component: InstallerAccount, props: {activeBlock: "News"}},
    { name: "installer-academy", path: "/installer-account/academy", component: InstallerAccount, props: {activeBlock: "Academy"}},
    { name: "installer-dealers", path: "/installer-account/dealers", component: InstallerAccount, props: {activeBlock: "Dealers"}}
    ]
});
