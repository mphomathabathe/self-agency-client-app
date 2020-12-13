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
          <div class="container-xxl py-6 py-lg-10" v-if="Welcome">
            <div class="container my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="avatar avatar-xl mb-5">
                  <lottie-animation
                    path="assets/lottie/phone.json"
                    class="avatar-img"
                  />
                </div>
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted text-center"
                    >Phone is ringing, pick up your phone
                  </small>
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <a
              @click="GoToConverstaion()"
              class="btn btn-primary mt-2 text-center"
              >Pick up the phone</a
            >
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="pickup">
            <div class="message">
              <a
                class="avatar avatar-sm mr-4 mr-lg-5"
                href="#"
                data-chat-sidebar-toggle="#chat-1-user-profile"
              >
                <img class="avatar-img" src="assets/images/friend.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Friend</h6>
                      <div>Hi {{ user.firstName }}</div>

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
                      <div>
                        Dude, you won’t believe what happened?! My mom asked me
                        about the cigarette smell on my uniform and I
                        ............
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
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

                <div class="col-auto">
                  <small class="text-muted"
                    >What did you tell her? Choose one option</small
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
                      <a href="#" @click="QuestionOneResponse('Lied')">
                        Lied to her
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
                      <a href="#" @click="QuestionOneResponse('Truth')">
                        Told her the truth
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="conversationOne">
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
                        she was very suspicious. I barely got away with it.
                        Anyway, I’ve been stressed about the matric dance/prom
                        next year. The financial situation at home is bad and I
                        don’t think my mom will be able to afford it. It going
                        to be so embarrassing if I’m the only one left out!
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
                <img class="avatar-img" src="assets/images/friend.png" alt="" />
              </a>
              <div class="message-body">
                <div class="message-row">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="message-content bg-light">
                      <h6 class="mb-2">Friend</h6>
                      <div>
                        Babe, you do know that there are old men out there
                        looking to date young ladies like us?! And apparently,
                        they have friendly pockets too! This can totally be a
                        quick way to make money! Within 6 months you will have
                        made more than enough money for the Matric dance.
                        Imagine us wearing those red bottoms!!!
                      </div>

                      <div class="mt-1">
                        <small class="opacity-65">1 min ago</small>
                      </div>
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

                <div class="col-auto">
                  <small class="text-muted"
                    >What are you going to do? Choose one option</small
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
                      <a href="#" @click="QuestionTwoResponse('Option A')">
                        No dude I can’t do that! I’ll just have to get a part
                        time job or something, especially during school
                        holidays.
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
                      <a href="#" @click="QuestionTwoResponse('Option B')">
                        That actually a good idea. In fact, I know a club we can
                        go to meet a few nice men with money.
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
                      <a href="#" @click="QuestionTwoResponse('Option C')">
                        Gosh I really don’t know what to do! My life sucks, its
                        unfair and there is nothing much I can do about it.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="container-xxl py-6 py-lg-10"
            v-if="conversationOneOptions"
          >
            <!-- Divider -->
            <div class="message-divider my-9 mx-lg-5">
              <div class="row align-items-center">
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted"
                    >What do you think could possibly happens next because of
                    this decision?</small
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
                      <a href="#" @click="ActionResponse('Drop out of school')">
                        Drop out of school
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
                      <a
                        href="#"
                        @click="
                          ActionResponse(
                            'Become sexually active and can get pregnant'
                          )
                        "
                      >
                        Become sexually active and can get pregnant
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
                      <a
                        href="#"
                        @click="ActionResponse('Contract STDs or HIV')"
                      >
                        Contract STDs or HIV
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
                      <h6 class="mb-2">Option D</h6>
                      <a
                        href="#"
                        @click="
                          ActionResponse('Become unmotivated and pessimistic')
                        "
                      >
                        Become unmotivated and pessimistic
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
                      <h6 class="mb-2">Option E</h6>
                      <a
                        href="#"
                        @click="ActionResponse('Get bad grades and fail')"
                      >
                        Get bad grades and fail
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
                      <h6 class="mb-2">Option F</h6>
                      <a
                        href="#"
                        @click="
                          ActionResponse(
                            'Can get drugged and assaulted or trafficked'
                          )
                        "
                      >
                        Can get drugged and assaulted or trafficked
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
                      <h6 class="mb-2">Option G</h6>
                      <a
                        href="#"
                        @click="ActionResponse('Develop marketable skills')"
                      >
                        Develop marketable skills
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
                      <h6 class="mb-2">Option H</h6>
                      <a
                        href="#"
                        @click="
                          ActionResponse(
                            'Improve chances of getting a good job in the future'
                          )
                        "
                      >
                        Improve chances of getting a good job in the future
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
                      <h6 class="mb-2">Option I</h6>
                      <a
                        href="#"
                        @click="ActionResponse('Become at risk for depression')"
                      >
                        Become at risk for depression
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
                      <h6 class="mb-2">Option J</h6>
                      <a
                        href="#"
                        @click="ActionResponse('Overeat and become overweight')"
                      >
                        Overeat and become overweight
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
                      <h6 class="mb-2">Option K</h6>
                      <a
                        href="#"
                        @click="ActionResponse('Become more confident')"
                      >
                        Become more confident
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-xxl py-6 py-lg-10" v-if="action">
            <div
              class="container my-9 mx-lg-5"
              v-if="
                action.actionType === 'Develop marketable skills' ||
                  action.actionType === 'Become more confident'
              "
            >
              <div class="row align-items-center">
                <div class="avatar avatar-xl mb-5">
                  <lottie-animation
                    path="assets/lottie/happy.json"
                    class="avatar-img"
                  />
                </div>
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted text-center"
                    >Hi {{ user.firstName }}, Based on the decision you made,
                    you show signs of a person with sense of ownership and
                    responsibility toward life. Getting a part-time job to save
                    up for the matric dance will give you more than just money.
                    It can also give you useful marketable skills such as
                    improving your communication and it can also instil
                    confidence, sense of responsibility and independence.
                  </small>
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <div class="container my-9 mx-lg-5" v-else>
              <div class="row align-items-center">
                <div class="avatar avatar-xl mb-5">
                  <lottie-animation
                    path="assets/lottie/sad.json"
                    class="avatar-img"
                  />
                </div>
                <div class="col">
                  <hr />
                </div>

                <div class="col-auto">
                  <small class="text-muted text-center"
                    >Hi {{ user.firstName }}, Based on the you made, you show
                    signs of a person who often feels hopeless and unmotivated
                    about their life. Did you know that apathy is a disorder of
                    motivation and it is associated with lower quality of life?
                    Which also means that you have more time to engage in
                    unsustainable and risky behaviours.
                  </small>
                </div>

                <div class="col">
                  <hr />
                </div>
              </div>
            </div>
            <a href="/" class="btn btn-primary mt-2 text-center"
              >Go Back Home</a
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
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  props: ["user"],
  data() {
    return {
      Welcome: true,
      pickup: false,
      conversationOne: false,
      conversationOneOptions: false,
      action: null,
    };
  },
  components: {
    LottieAnimation,
  },
  methods: {
    GoToConverstaion() {
      this.Welcome = false;
      this.pickup = true;
    },
    QuestionOneResponse(val) {
      axios({
        url: `${REST_API_URI}/api/accounts/postResponse`,
        data: { responseType: val },
        method: "POST",
      }).then((res) => {
        console.log(res);
        this.conversationOne = true;
        this.Welcome = false;
        this.pickup = false;
      });
    },
    QuestionTwoResponse() {
      this.conversationOneOptions = true;
      this.conversationOne = false;
      this.Welcome = false;
      this.pickup = false;
    },
    ActionResponse(val) {
      axios({
        url: `${REST_API_URI}/api/accounts/actionResponse`,
        method: "POST",
        data: { actionType: val },
      }).then((res) => {
        this.action = res.data.action;
        this.conversationOneOptions = false;
        this.conversationOne = false;
        this.Welcome = false;
        this.pickup = false;
      });
    },
  },
};
</script>

<style></style>
