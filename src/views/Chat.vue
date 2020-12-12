<template>
  <div class="main main-visible" data-mobile-height="" v-if="user">
    <div id="chat-1" class="chat dropzone-form-js" data-dz-url="some.html">
      <div class="chat-body">
        <div class="chat-header border-bottom py-4 py-lg-6 px-lg-8">
          <div class="container-xxl">
            <div class="row align-items-center">
              <div class="col-3 d-xl-none">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <a class="text-muted px-0" href="/" data-chat="open">
                      <i class="icon-md fe-chevron-left"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-xl-6">
                <div class="media text-center text-xl-left">
                  <div class="avatar avatar-sm d-none d-xl-inline-block mr-5">
                    <img
                      src="assets/images/happiness.png"
                      class="avatar-img"
                      alt=""
                    />
                  </div>

                  <div class="media-body align-self-center text-truncate">
                    <h6 class="text-truncate mb-n1">
                      {{ user.firstName }} {{ user.lastName }}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-content px-lg-8">
          <div class="container-xxl py-6 py-lg-10" v-if="QuestionOne">
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img
                  class="avatar-img"
                  src="assets/images/chatbot.png"
                  alt=""
                />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Chatbot</h6>
                      <div>
                        Hi {{ user.firstName }} start your journey by choosing
                        your topic of interest. Then follow and engage with the
                        narrative in a manner that resembles the decisions you
                        would have made in reality
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Choose Topic of Interest</h6>
                      <a href="#" @click="chooseInterest()">
                        1. Risky Behaviours
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Divider -->
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto"></div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="QuestionTwo">
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img
                  class="avatar-img"
                  src="assets/images/happiness.png"
                  alt=""
                />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">{{ user.firstName }}</h6>
                      <div>
                        Hi mom
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/mom.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Mom</h6>
                      <a href="#" @click="chooseInterest()">
                        Afternoon {{ user.firstName }}. How was school?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Divider -->
            <!-- Divider -->
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted"
                    >{{ user.firstName }} rushes to her bedroom and mumbling the
                    answer to avoid mom’s question</small
                  >
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
              <a
                href="#"
                @click="GoQuestionThree()"
                class="btn btn-primary text-center"
                >Contiune</a
              >
            </div>
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="QuestionThree">
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/mom.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Mom</h6>
                      <div>
                        {{ user.firstName }} comeback here! Is that that the
                        smell of cigarettes that I’m smelling from you?
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted"
                    >What is your response? Choose one option</small
                  >
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Option A</h6>
                      <a href="#" @click="QuestionThreeResponse('Option A')">
                        No mom it’s nothing really, I was in a crowded place on
                        my way back and some people must have been smoking
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Option B</h6>
                      <a href="#" @click="QuestionThreeResponse('Option B')">
                        Kind of… It’s just that I’ve been really stressed, and a
                        friend told me that smoking will help calm me down.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Divider -->
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto"></div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="ThreeResponse">
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/mom.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Mom</h6>
                      <div>
                        {{ ThreeResponse }}
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted"
                    >{{ user.firstName }} fiddles with hands</small
                  >
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/mom.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Mom</h6>
                      <div>
                        What’s this I’m hearing about you failing grade 11?
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img
                  class="avatar-img"
                  src="assets/images/happiness.png"
                  alt=""
                />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">{{ user.firstName }}</h6>
                      <a href="#">
                        I don’t know what you are talking about mom.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              @click="GoQuestionFour()"
              class="btn btn-primary mt-2 text-center"
              >Continue</a
            >
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="QuestionFour">
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/mom.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Mom</h6>
                      <div>
                        Well, earlier today I got a call from your teacher. She
                        told me that if you don’t pull up your socks in next
                        coming months, you certainly will not make it to grade
                        12!
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted"
                    >{{ user.firstName }} fiddles with hands</small
                  >
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/mom.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Mom</h6>
                      <a href="#">
                        I told your dad about what’s happening, and he will be
                        coming with me to the parent teacher meeting.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted"
                    >{{ user.firstName }}, Mom is waiting for you to respond.
                    Choose one option</small
                  >
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Option A</h6>
                      <a href="#" @click="QuestionFourResponse('Option A')">
                        Look mom, there was really no need to involve dad. It’s
                        not like he cares about me anyway.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Option B</h6>
                      <a href="#" @click="QuestionFourResponse('Option B')">
                        Look mom, this teacher doesn’t really know how to
                        explain things properly. I’m even not the only one
                        struggling in their class.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message message-right">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Option C</h6>
                      <a href="#" @click="QuestionFourResponse('Option C')">
                        I have been struggling and I’m thinking of enrolling for
                        extra classes.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="FourResponse">
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/mom.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Mom</h6>
                      <div>
                        {{ FourResponse }}
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted"
                    >{{ user.firstName }} leaves the kitchen
                  </small>
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <a
              href="#"
              @click="CompleteScence()"
              class="btn btn-primary mt-2 text-center"
              >Continue</a
            >
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="reward">
            <div class="container my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted text-center"
                    >Congratulations {{ user.firstName }}, You've earned yourself a {{ reward.rewardType }} badge
                  </small>
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <a
              href="#"
              @click="GoToSceneTwo()"
              class="btn btn-primary mt-2 text-center"
              >Continue to Scene two</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { REST_API_URI } from "../config/keys";
export default {
  props: ["user"],
  data() {
    return {
      QuestionOne: true,
      QuestionTwo: false,
      QuestionThree: false,
      ThreeResponse: null,
      QuestionFour: false,
      FourResponse: null,
      risky_behaviour: false,
      reward: null,
    };
  },
  methods: {
    chooseInterest() {
      this.risky_behaviour = true;
      this.QuestionOne = false;
      this.QuestionTwo = true;
    },
    GoQuestionThree() {
      this.risky_behaviour = true;
      this.QuestionOne = false;
      this.QuestionTwo = false;
      this.QuestionThree = true;
    },
    QuestionThreeResponse(val) {
      this.risky_behaviour = true;
      this.QuestionOne = false;
      this.QuestionTwo = false;
      this.QuestionThree = false;
      if (val === "Option A") {
        this.ThreeResponse = "You better not be lying to me.";
      } else {
        this.ThreeResponse =
          "Child! I’m stressed out too, but have you seen me smoke!? What do know about stress anyway?! This better be the first and last time!";
      }
    },
    GoQuestionFour() {
      this.risky_behaviour = true;
      this.QuestionOne = false;
      this.QuestionTwo = false;
      this.QuestionThree = false;
      this.ThreeResponse = null;
      this.QuestionFour = true;
    },
    QuestionFourResponse(val) {
      this.risky_behaviour = true;
      this.QuestionOne = false;
      this.QuestionTwo = false;
      this.QuestionThree = false;
      this.ThreeResponse = null;
      this.QuestionFour = false;
      if (val === "Option A") {
        this.FourResponse =
          "Whatever the case, he is still your father and you need to respect him!";
      } else if (val === "Option B") {
        this.FourResponse =
          "Whatever the case, we will find out when we get there!";
      } else if (val === "Option C") {
        this.FourResponse =
          "Okay child let me know how you think I can help you going forward.";
      }
    },
    CompleteScence() {
      let token = this.$store.state.auth.token;
      console.log(token);
      axios({
        url: `${REST_API_URI}/api/accounts/getRewards`,
        headers: { Authorization: "Bearer " + token },
        data: { rewardType: "Silver" },
        method: "POST",
      }).then((res) => {
        this.reward = res.data.reward;
        this.risky_behaviour = true;
      this.QuestionOne = false;
      this.QuestionTwo = false;
      this.QuestionThree = false;
      this.ThreeResponse = null;
      this.QuestionFour = false;
      this.FourResponse = null
      });
    },
  },
};
</script>

<style></style>
