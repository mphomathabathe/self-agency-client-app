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
                <div class="card mb-6">
                  <div class="card-body">
                    <div class="media">
                      <div class="avatar mr-5">
                        <img
                          class="avatar-img"
                          src="https://image.flaticon.com/icons/png/512/30/30609.png"
                        />
                      </div>

                      <div class="media-body align-self-center">
                        <h6 class="mb-0">Head</h6>
                        <small class="text-muted">Cognitive Dimension</small>
                      </div>
                      <div class="align-self-center ml-5">
                        <div class="dropdown z-index-max">
                          <a
                            href="#"
                            class="btn btn-sm btn-ico btn-link text-muted w-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu">
                            <a
                              class="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              New chat <span class="ml-auto fe-edit-2"></span>
                            </a>
                            <a
                              class="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              Delete <span class="ml-auto fe-trash-2"></span>
                            </a>
                          </div>
                        </div>
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
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade h-100" id="tab-content-friends" role="tabpanel">
        <div class="d-flex flex-column h-100">
          <div class="hide-scrollbar">
            <div class="container-fluid py-6">
              <h2 class="font-bold mb-6">Peers</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  props: ["user"],
  components: {
    LottieAnimation,
  },
};
</script>

<style></style>
