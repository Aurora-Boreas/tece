<template>
  <div class="header-panel">
    <div class="container flex between-xs">
      <div class="logo">
        <router-link to="#">
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
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
</style>
