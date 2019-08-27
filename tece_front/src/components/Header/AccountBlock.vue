<template>
  <div class="account-block">
    <div class="auth-block flex" v-if="!currentUser">
      <router-link to="/register" class="btn btn-register flex center-xs middle-xs">
        Регистрация
      </router-link>
      <router-link to="/register" class="btn btn-signin flex center-xs middle-xs">
        Войти
      </router-link>
    </div>
    <div class="auth-block flex" v-else>
      <div class="level">
        Мастер
      </div>
      <div class="points">
        4 500 баллов
      </div>
      <minicart-icon/>
      <avatar-icon/>
    </div>
  </div>
</template>
<script>
import MinicartIcon from "./MinicartIcon"
import AvatarIcon from "./AvatarIcon"

export default {
  data() {
    return {
      currentUser: true
    }
  },
  components: {
    MinicartIcon,
    AvatarIcon
  }
}
</script>
<style lang="scss" scoped>
@import "../../css/variables/variables";
  .account-block {
    .btn {
      min-width: 213px;
      min-height: 36px;
      color: $white;
      transition: all ease 0.4s;
    }
    .btn-register {
      margin-right: 32px;
      background-color: $dark-blue;
      border: 2px solid $dark-blue;
      &:hover {
        background-color: $white;
        color: $dark-blue;
      }
    }
    .btn-signin {
      background-color: $blue;
      border: 2px solid $blue;
      &:hover {
        background-color: $white;
        color: $blue;
      }
    }
    .level,
    .points {
      color: $gray2;
    }
  }
</style>
