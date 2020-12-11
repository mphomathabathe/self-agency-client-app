import axios from "axios";
import { REST_API_URI } from "../../config/keys";
import router from "../../router";
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

const state = {
    token: localStorage.getItem("token") || "",
    status: "",
    user: null,
    errors: null,
};

const mutations = {
    auth_request(state) {
        state.errors = null;
        state.status = "loading";
    },
    auth_success(state, token, user) {
        state.token = token;
        state.user = user;
        state.status = "success";
        state.errors = null;
    },
    register_success(state) {
        state.status = "success";
        state.errors = null;
    },
    auth_error(state, errors) {
        state.errors = errors;
        state.errors = errors;
    },
    profile_request(state) {
        state.status = "loading";
    },
    user_profile(state, user) {
        state.user = user;
    },
    profile_success(state, profile) {
        state.profile = profile;
    },
    verify_error(state, errors) {
        state.errors = errors;
        state.status = "error";
    },
    verify_success(state) {
        state.errors = null;
        state.status = "success";
    },
};

const actions = {
    // register action
    async register({ commit }, user) {
        commit("auth_request");
        await axios({
                url: `${REST_API_URI}/api/accounts/register`,
                data: user,
                method: "POST",
            })
            .then((res) => {
                if (res.status === 201) {
                    Toast.fire({
                        icon: "success",
                        title: res.data.message,
                    });
                    commit("register_success");
                }
            })
            .catch((error) => {
                if (error.response.status === 412) {
                    let errors = error.response.data.data.errors;
                    commit("auth_error", errors);
                }
            });
    },
    // login action
    async login({ commit }, user) {
        commit("auth_request");
        await axios({
                url: `${REST_API_URI}/api/accounts/login`,
                data: user,
                method: "POST",
            })
            .then((res) => {
                if (res.status === 200) {
                    let token = res.data.token;
                    let user = res.data.user;
                    localStorage.setItem("token", token);
                    axios.defaults.headers.common["Authorization"] = token;

                    commit("auth_success", { token, user });
                    router.push("/")
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    let errors = error.response.data.message;
                    Toast.fire({
                        icon: "error",
                        title: errors,
                    });
                }
                if (error.response.status === 412) {
                    let errors = error.response.data.data.errors;
                    commit("auth_error", errors);
                }
            });
    },
    // get profile action
    async getProfile({ commit }) {
        commit("profile_request");
        let token = state.token;
        await axios({
                url: `${REST_API_URI}/api/accounts/profile`,
                headers: { Authorization: "Bearer " + token },
                method: "GET",
            })
            .then((res) => {
                if (res.status === 200) {
                    let user = res.data.user;
                    let profile = res.data.profile;
                    console.log(profile)
                    commit("user_profile", user);
                    commit("profile_success", profile);
                }
            })
            .catch((error) => {
                if (error.response.status == 401) {
                    localStorage.removeItem("token");
                }
            });
    },
    // logout action
    async logout({ commit }) {
        await localStorage.removeItem("token");
        commit("logout");
        delete axios.defaults.headers.common["Authorization"];
        return;
    }
};

const getters = {
    isLoggedIn: (state) => !!state.token,
    authState: (state) => state.status,
    user: (state) => state.user,
    errors: (state) => state.errors,
    status: (state) => state.status,
};

export default {
    state,
    actions,
    mutations,
    getters,
};