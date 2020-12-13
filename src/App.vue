<template>
  <div class="layout">
    <navigation-bar v-if="isLoggedIn && user" />
    <top-navigation v-if="isLoggedIn && user" :user="user"/>
    <router-view :user="user" />
    <ask-a-peer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavigationBar from "@/components/NavigationBar";
import TopNavigation from './components/TopNavigation.vue';
import AskAPeer from './components/AskAPeer.vue';
export default {
  components: {
    NavigationBar,
    TopNavigation,
    AskAPeer
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
    openAskPeerModal() {
      window.$("#remove-employee").modal("show")
    }
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
