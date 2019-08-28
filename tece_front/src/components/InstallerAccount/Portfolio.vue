<template>
  <div class="installer-portfolio row">
    <div class="header flex between-xs middle-xs">
      <h2>Портфолио</h2>
      <span>ID {{ user_id}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Portfolio',
    data() {
      return {
        user_id: 'УК 459763221'
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../css/variables/variables";
  .installer-portfolio {
    height: 100%;
    background-color: $gray5;
    padding: 40px 24px;
    align-content: flex-start;
  }
</style>
