<template>
  <main class="bg-slate-200 flex justify-center font-sans">
    <article class="lg:w-4/5 md:w-full w-full h-full px-5 flex justify-center">
      <div class="w-full h-full p-8 bg-white">
        <h3
          class="
            md:text-5xl
            lg:text-5xl
            xl:text-5xl
            text-2xl text-center
            p-5
            xl:py-5 xl:px-0
            font-semibold font-sans
          "
        >
          Are you looking for a career rejuvenation ?
        </h3>
        <p class="font-Poppins p-2 text-center">
          Technology is growing very fast. So much so we are not able to catch
          up with emerging issues of the current world.
        </p>
        <div class="shadow-xl p-4 w-5/6 mx-auto">
          <p class="font-Open-Sans">
            These free resources environment provides scopes such as resources,
            documentaries and glossary items to help you be up-to-date with the
            current and developing environment in which disruptive technologies
            and trends such as the Internet of Things (IoT), robotics, virtual
            reality (VR) and artificial intelligence (AI) are changing the way
            we live and work.
          </p>
        </div>
        <div
          class="
            p-3
            m-2
            md:text-3xl
            lg:text-3xl
            xl:text-3xl
            text-base text-center
            font-Inter
          "
        >
          <h3
            class="
              md:text-5xl
              lg:text-5xl
              xl:text-5xl
              text-xl
              font-mono
              text-green-400
            "
          >
            Get Access to Free resources!
          </h3>
          <h4 class="text-4xl mt-4">Human Resources</h4>
          <div class="m-3 justify-center flex flex-wrap">
            <div
              class="
                md:w-full
                lg:w-2/5
                w-full
                m-2
                h-40
                shadow-lg
                hover:-translate-y-2 hover:border-2 hover:border-sky-700
                duration-700
                flex
                items-center
                justify-around
                p-5
                cursor-default
              "
              v-for="hr in human_resource"
              :key="hr.title"
              @click.stop="takeMeToLink(hr)"
            >
              <img :src="`images/${hr.img}`" :alt="hr.title" class="h-2/3" />
              <p class="hover:text-sky-600 md:text-2xl">{{ hr.title }}</p>
            </div>
          </div>
        </div>
        <div class="p-3 m-2 text-xl text-center font-Inter">
          <h4 class="text-4xl mt-4">Downloads</h4>
          <div class="m-3 justify-center flex flex-wrap">
            <div
              class="
                md:w-full
                lg:w-2/5
                w-full
                m-2
                h-40
                shadow-lg
                hover:-translate-y-2 hover:border
                duration-700
                flex
                items-center
                justify-around
                p-2
                cursor-default
              "
              v-for="book in books"
              :key="book.title"
              @click.stop="signUp()"
            >
              <a
                @click.stop="signUp()"
                :href="`books/${book.name}`"
                target="_blank"
              >
                <img
                  :src="`images/${book.img}`"
                  :alt="book.title"
                  class="w-24 hover:scale-150 transition-all duration-1000"
                />
              </a>
              <div class="flex-col">
                <div>
                  <p class="hover:text-sky-600">
                    <a :href="`books/${book.name}`" target="_blank">{{
                      book.title
                    }}</a>
                  </p>
                </div>
                <div class="flex">
                  <p class="text-emerald-700">{{ book.pages }} Pages:</p>
                  <p class="text-emerald-700">Size: {{ book.size }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <sign-up v-if="showModal" @redirect-url="continueToUrl = true"></sign-up>
  </main>
</template>

<script>
import SignUp from "../components/SignUp.vue";
export default {
  components: { SignUp },
  data() {
    return {
      showModal: false,
      books: [
        {
          img: "LIP_brochure.png",
          title: "Location Intelligence Platform",
          pages: "10",
          size: "1MB",
          name: "LIP Brochure.pdf",
        },
        {
          img: "4IR_plan_brochure.png",
          title: "4IR PLAN",
          pages: "6",
          size: "4MB",
          name: "4IR plan brochure.pdf",
        },
        {
          img: "interviewer_framework.png",
          title: "Interviewer Framework",
          pages: "6",
          size: "3MB",
          name: "Data Scientist Interviewer Framework.pdf",
        },
        {
          img: "data_usecase_handbook.png",
          title: "DATA USECASE HANDBOOK",
          pages: "28",
          size: "14MB",
          name: "DATA USECASE HANDBOOK HANDBOOK.pdf",
        },
      ],
      human_resource: [
        {
          title: "PREDICTIVE ANALYTICS SURVEYS",
          img: "survey.svg",
          link: "https://surveys.predictiveanalytics.africa/",
        },
        {
          title: "CHARTS",
          img: "charts.png",
          link: "https://charts.predictiveanalytics.co.ke/accounts/login?returnUrl=%2Fcharts",
        },
        {
          title: "EMPLOYEE KPI",
          img: "kpi.png",
          link: "https://kpis.predictiveanalytics.co.ke/",
        },
        {
          title: "JOBS",
          img: "job.png",
          link: "https://jobs.predictiveanalytics.co.ke",
        },
      ],
      continueToUrl: false,
      currentRedirectLink: null,
    };
  },
  methods: {
    takeMeToLink(hr) {
      this.signUp();
      this.currentRedirectLink = hr.link;
    },
    signUp() {
      this.showModal = true;
    },
  },
  watch: {
    continueToUrl(status) {
      if (status) {
        this.showModal = false;
        window.location.href = this.currentRedirectLink;
      }
    },
  },
};
</script>

<style>
</style>