<template>
    <div class="installer-account">
        <div class="container">
          <div class="h2">ЛК монтажника</div>
          <div class="row">
            <div class="col-md-3">
              <div class="row relative"
                   v-for="(page, index) in navigation"
                   :key="index"
                   @click="isVisiblePage = true"
                   :class="{ 'active-link' : ((page.link === $route.path) && isVisiblePage), 'disable-link' : ((page.link !== $route.path) && isVisiblePage) }"
              >
                <router-link class=""
                             :to="page.link"
                             :class="{ '' : (page.link == $route.path) }"
                >
                  {{ page.title }}
                </router-link>
              </div>
            </div>
            <div class="col-md-9">
              <router-view :is="this.$props.activeBlock"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Profile from "@/components/InstallerAccount/Profile";
import Points from "@/components/InstallerAccount/Points";

export default {
  components: {
    Profile,
    Points
  },
  data() {
    return {
      title: "",
      isVisiblePage: false,
      navigation: [
        { title: 'Профиль',
          name: 'my-profile',
          link: '/installer-account/profile',
        },
        { title: 'Мои баллы',
          name: 'my-points',
          link: '/installer-account/points',
        }
      ]
    }
  },
  props: {
    activeBlock: {
      type: String,
      default: 'Profile'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
