<template>
  <div class="main main-visible" data-mobile-height="" v-if="user">
    <div class="chat flex-column justify-content-center text-center">
      <div class="container-xxl">
        <div class="avatar avatar-lg mb-5">
          <lottie-animation path="assets/lottie/user.json" class="avatar-img" />
        </div>

        <h6>Hey, {{ user.firstName }}!</h6>
        <p>
          The journey to self-efficacy or change agency starts with the individual selecting a topic of interest
        </p>
        <a 
          href="/chat" class="btn btn-primary" @click="goToHome()">Select a topic of interest</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  props: ["user"],
  name: "Home",
  components: {
    LottieAnimation,
  },
  methods: {
    goToHome() {
      window.$('.main').removeClass('main-visible')
    }
  }
};
</script>
