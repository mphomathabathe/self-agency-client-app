<template>
  <div class="layout">
    <navigation-bar v-if="isLoggedIn && user" />
    <top-navigation v-if="isLoggedIn && user" :user="user"/>
    <router-view :user="user" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavigationBar from "@/components/NavigationBar";
import TopNavigation from './components/TopNavigation.vue';
export default {
  components: {
    NavigationBar,
    TopNavigation
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapActions(["getProfile"]),
    user: function() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.user = null;
      this.logout();
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.getProfile;
    }
  },
}
</script>

<style>

</style>
