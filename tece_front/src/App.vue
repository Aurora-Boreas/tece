<template>
  <div id="app">
    <div id="viewport">
      <header-panel/>
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderPanel from "./components/Header/HeaderPanel"
  export default {
    components:  {
      HeaderPanel
    }
  }
</script>
<style lang="scss" src="./css/main.scss">
