<template>
  <div class="header-panel relative">
    <div class="container flex between-xs">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/tece_logo.svg" alt="TECE">
        </router-link>
      </div>
      <account-block/>
    </div>

  </div>
</template>
<script>
import AccountBlock from "./AccountBlock"
export default {
  components: {
    AccountBlock
  }
}
</script>
<style lang="scss" scoped>
  .header-panel {
    padding: 18px 40px 14px;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      z-index: 1;
      left: 0;
      bottom: 0;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);;
    }
  }
</style>
