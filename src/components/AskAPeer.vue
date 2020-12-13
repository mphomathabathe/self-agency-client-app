<template>
  <div
    class="modal fade"
    id="invite-friends"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="media flex-fill">
            <div class="icon-shape rounded-lg bg-primary text-white mr-5">
              <i class="fe-users"></i>
            </div>
            <div class="media-body align-self-center">
              <h5 class="modal-title">Ask Your Peers</h5>
              <p class="small">Ask your peers any question</p>
            </div>
          </div>

          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="AskQuestion()">
          <div class="modal-body">
            <div class="form-group mb-0">
              <label for="invite-message" class="small"
                >What is your question</label
              >
              <textarea
                v-model="text"
                class="form-control form-control-lg"
                data-autosize="true"
              ></textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-lg btn-block btn-primary d-flex align-items-center"
            >
              Post Question
              <i class="fe-user-plus ml-auto"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { REST_API_URI } from "../config/keys";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 10000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    AskQuestion() {
      let question = this.text;
      if (question) {
        axios({
          url: `${REST_API_URI}/api/peers/askPeers`,
          data: { text: question },
          method: "POST",
        }).then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
        });
      }
    }
  },
};
</script>

<style></style>
