<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
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
