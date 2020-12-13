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
                  <div class="media-body align-self-center text-truncate">
                    <h6 class="text-truncate mb-n1">
                      User Analytics
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-content px-lg-8">
          <div class="container-xxl py-6 py-lg-10">
            <div class="row">
              <h1>Decisions Taken By Users</h1>
              <div class="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
import axios from "axios";
import { REST_API_URI } from "../config/keys";
export default {
  props: ["user"],
  data() {
    return {
      actions: null,
    };
  },
  methods: {
    getActions() {
      axios({
        url: `${REST_API_URI}/api/analytics/actions`,
        method: "GET",
      }).then((res) => {
        this.actions = res.data.actions;
      });
    },
  },
  mounted() {
    this.getActions();
  },
};
</script>

<style></style>
