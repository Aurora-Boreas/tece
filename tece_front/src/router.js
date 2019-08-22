import Vue from "vue";
import Router from "vue-router";
import InstallerAccount from "@/views/InstallerAccount";
import LoginInstaller from "@/components/InstallerAccount/Auth/Login";
import RegisterInstaller from "@/components/InstallerAccount/Auth/Register";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/installer_account",
      name: "installer_account",
      component: InstallerAccount,
      children: [
        {
          path: "login",
          component: LoginInstaller
        },
        {
          path: "register",
          component: RegisterInstaller
        }
      ]
    }
  ]
});
