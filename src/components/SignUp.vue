<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="
          flex
          items-end
          sm:items-center
          justify-center
          min-h-full
          p-4
          text-center
          sm:p-0
        "
      >
        <div
          class="
            relative
            bg-white
            rounded-lg
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:my-8 sm:max-w-lg sm:w-full
          "
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 94.926 94.926"
            class="w-4 m-2 absolute right-0 hover:w-5 transition-all"
            xml:space="preserve"
            @click="closeModal"
          >
            <g>
              <path
                d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium mb-6 text-gray-900"
                  id="modal-title"
                >
                  One Last Step.
                </h3>
                <p class="mb-4 font-['Open_Sans']">
                  Access to these resources is free, but we would appreciate it
                  if you subscribe to our free membership.
                </p>
                <div class="mt-2 w-full">
                  <form class="w-full mb-2" ons>
                    <div class="w-full flex items-center mb-2">
                      <span
                        class="
                          ml-3
                          fill-current
                          text-gray-400 text-xs
                          z-10
                          fas
                          fa-user
                        "
                      ></span>
                      <input
                        v-model="userDetails.fullName"
                        type="text"
                        placeholder="Full Name"
                        class="
                          -mx-6
                          px-8
                          w-full
                          border
                          rounded
                          px-3
                          py-2
                          text-gray-700
                          focus:outline-none
                        "
                      />
                    </div>
                    <div class="flex items-center mb-2 w-full">
                      <span
                        class="
                          ml-3
                          fill-current
                          text-gray-400 text-xs
                          z-10
                          fas
                          fa-user
                        "
                      ></span>
                      <input
                        v-model="userDetails.organization"
                        type="text"
                        placeholder="Organization"
                        class="
                          -mx-6
                          px-8
                          w-full
                          border
                          rounded
                          px-3
                          py-2
                          text-gray-700
                          focus:outline-none
                        "
                      />
                    </div>
                    <div class="flex items-center mb-2 w-full">
                      <span
                        class="
                          ml-3
                          fill-current
                          text-gray-400 text-xs
                          z-10
                          fas
                          fa-user
                        "
                      ></span>
                      <input
                        v-model="userDetails.email"
                        type="email"
                        placeholder="Email"
                        class="
                          -mx-6
                          px-8
                          w-full
                          border
                          rounded
                          px-3
                          py-2
                          text-gray-700
                          focus:outline-none
                        "
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div v-if="errors.length" class="w-full m-3">
            <p
              class="text-red-900 text-center bg-red-400 my-2"
              v-for="error in errors"
              :key="error"
            >
              {{ error }}
            </p>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="submitDetails()"
              class="
                w-full
                inline-flex
                justify-center
                rounded-md
                border border-transparent
                shadow-sm
                px-4
                py-2
                bg-green-700
                text-base
                font-medium
                text-white
                hover:bg-green-800
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-green-500
                sm:ml-3 sm:w-auto sm:text-sm
              "
            >
              Read and Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "../helpers/auth";

export default {
  data() {
    return {
      errors: [],
      formIsValid: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

      userDetails: {
        fullName: "",
        organization: "",
        email: "",
      },
    };
  },
  methods: {
    async submitDetails() {
      this.checkValidity();

      if (!this.formIsValid) return;

      const res = await register(this.userDetails);
      if (res.token) {
        this.$emit("redirect-url");
      } else if (res.error) {
        this.errors = [];

        return this.errors.push(res.error);
      }
    },

    closeModal() {
      this.$emit("close-modal");
    },

    checkValidity() {
      this.errors = [];

      if (!this.userDetails.fullName) {
        this.formIsValid = false;
        return this.errors.push("Please Fill in your Full Name!");
      } else if (!this.userDetails.email) {
        this.formIsValid = false;
        return this.errors.push("Please Fill in the email!");
      } else if (!this.reg.test(this.userDetails.email)) {
        this.formIsValid = false;
        this.errors.push("Please Fill in a valid email!");
      } else {
        this.formIsValid = true;
      }
    },
  },
};
</script>

<style>
</style>