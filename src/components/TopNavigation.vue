<template>
  <div class="sidebar">
    <div class="tab-content h-100" role="tablist">
      <div class="tab-pane fade h-100" id="tab-content-home" role="tabpanel">
        <div class="d-flex flex-column h-100">
          <div class="hide-scrollbar">
            <div class="container-fluid py-6">
              <h2 class="font-bold mb-6">Home</h2>
              <form class="mb-6">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Search for storylines..."
                    aria-label="Search for storylines..."
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-lg btn-ico btn-secondary btn-minimal"
                      type="submit"
                    >
                      <i class="fe-search"></i>
                    </button>
                  </div>
                </div>
              </form>

              <nav class="mb-n6">
                <!-- Friend -->
                <a href="/chat" class="card mb-6">
                  <div class="card-body">
                    <div class="media">
                      <div class="avatar mr-5">
                        <lottie-animation
                          path="assets/lottie/list.json"
                          class="avatar-img"
                        />
                      </div>

                      <div class="media-body align-self-center">
                        <h6 class="mb-0">Select topic of interest</h6>
                      </div>
                    </div>
                  </div>
                </a>
                <!-- Friend -->
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade h-100" id="tab-content-user" role="tabpanel">
        <div class="d-flex flex-column h-100">
          <div class="hide-scrollbar">
            <div class="container-fluid py-6">
              <h2 class="font-bold mb-6">Profile</h2>
              <div class="card mb-6">
                <div class="card-body">
                  <div class="text-center py-6">
                    <!-- Photo -->
                    <div class="avatar avatar-xl mb-5">
                      <lottie-animation
                        path="assets/lottie/user.json"
                        class="avatar-img"
                      />
                    </div>

                    <h5>{{ user.firstName }} {{ user.lastName }}</h5>
                  </div>
                </div>
              </div>
              <div class="card mb-6">
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item px-0 py-6">
                      <div class="media align-items-center">
                        <div class="media-body">
                          <p class="small text-muted mb-0">Gender</p>
                          <p>{{ user.gender }}</p>
                        </div>
                        <i class="text-muted icon-sm fe-user"></i>
                      </div>
                    </li>
                    <li class="list-group-item px-0 py-6">
                      <div class="media align-items-center">
                        <div class="media-body">
                          <p class="small text-muted mb-0">Age</p>
                          <p>{{ user.age }}</p>
                        </div>
                        <i class="text-muted icon-sm fe-user-plus"></i>
                      </div>
                    </li>
                    <li class="list-group-item px-0 py-6">
                      <div class="media align-items-center">
                        <div class="media-body">
                          <p class="small text-muted mb-0">Email</p>
                          <p>{{ user.email }}</p>
                        </div>
                        <i class="text-muted icon-sm fe-mail"></i>
                      </div>
                    </li>
                    <li class="list-group-item px-0 py-6">
                      <div class="media align-items-center">
                        <div class="media-body">
                          <p class="small text-muted mb-0">Join Date</p>
                          <p>
                            {{ user.createdAt | moment("dddd, MMMM Do YYYY") }}
                          </p>
                        </div>
                        <i class="text-muted icon-sm fe-clock"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <!-- Button -->
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-danger d-flex align-items-center"
                  >
                    Logout
                    <span class="fe-log-out ml-auto"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade h-100" id="tab-content-rewards" role="tabpanel">
        <div class="d-flex flex-column h-100">
          <div class="hide-scrollbar">
            <div class="container-fluid py-6">
              <h2 class="font-bold mb-6">My Rewards</h2>
              <nav class="mb-n6">
                <!-- Friend -->
                <div
                  class="card mb-6"
                  v-for="(reward, index) in rewards"
                  :key="index"
                >
                  <div class="card-body">
                    <div class="media">
                      <div class="avatar mr-5">
                        <lottie-animation
                          path="assets/lottie/badge.json"
                          class="avatar-img"
                        />
                      </div>

                      <div class="media-body align-self-center">
                        <h6 class="mb-0">{{ reward.rewardType }}</h6>
                        <p class="small text-success">
                          Obtained On:
                          {{ reward.createdAt | moment("dddd, MMMM Do YYYY") }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Friend -->
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade h-100" id="tab-content-friends" role="tabpanel">
        <div class="d-flex flex-column h-100">
          <div class="hide-scrollbar">
            <div class="container-fluid py-6">
              <h2 class="font-bold mb-6">Peers</h2>
              <div
                class="text-center hide-scrollbar d-flex my-7"
                data-horizontal-scroll=""
              >
                <a
                  href="#"
                  class="d-block text-reset mr-7 mr-lg-6"
                  v-for="(peer, index) in peers"
                  :key="index"
                >
                  <div class="avatar avatar-sm avatar-online mb-3">
                    <lottie-animation
                      path="assets/lottie/user.json"
                      class="avatar-img"
                    />
                  </div>
                  <div class="small">{{ peer.firstName }}</div>
                </a>
              </div>
              <button
                type="button"
                class="btn btn-lg btn-block btn-secondary d-flex align-items-center mb-6"
                data-toggle="modal"
                data-target="#invite-friends"
              >
                Ask a Peer
                <i class="fe-users ml-auto"></i>
              </button>
              <div
                class="card mb-6"
                v-for="(question, index) in questions"
                :key="index"
              >
                <div class="card-body">
                  <div class="media">
                    <div class="media-body align-self-center">
                      <h6 class="mb-0">{{ question.text }}</h6>
                      <p class="small text-danger mt-2">
                        Posted On:
                        {{ question.createdAt | moment("MMMM Do YYYY") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import axios from "axios";
import { REST_API_URI } from "../config/keys";
export default {
  props: ["user"],
  data() {
    return {
      rewards: null,
      peers: null,
      questions: null,
    };
  },
  components: {
    LottieAnimation,
  },
  methods: {
    getMyRewards() {
      let token = this.$store.state.auth.token;
      axios({
        url: `${REST_API_URI}/api/accounts/rewards`,
        headers: { Authorization: "Bearer " + token },
        method: "GET",
      }).then((res) => {
        this.rewards = res.data.rewards;
      });
    },
    getPeers() {
      axios({ url: `${REST_API_URI}/api/peers/getPeers`, method: "GET" }).then(
        (res) => {
          this.peers = res.data.peers;
        }
      );
    },
    getQuestions() {
      axios({
        url: `${REST_API_URI}/api/peers/getQuestions`,
        method: "GET",
      }).then((res) => {
        this.questions = res.data.questions;
      });
    },
  },
  mounted() {
    this.getMyRewards();
    this.getPeers();
    this.getQuestions();
  },
};
</script>

<style></style>
