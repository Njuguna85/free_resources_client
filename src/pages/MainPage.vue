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
        <p class="font-Poppins p-2 text-center w-5/6 mx-auto">
          Technology is growing very fast. So much so we are not able to catch
          up with emerging issues of the current world.
        </p>
        <div class="shadow-xl p-5 w-5/6 mx-auto">
          <p class="font-['Open_Sans']">
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
          <h4 class="text-4xl mt-4">Marketing</h4>
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
              v-for="mr in marketing"
              :key="mr.title"
              @click.stop="takeMeToLink(mr)"
            >
              <img :src="`images/${mr.img}`" :alt="mr.title" class="h-2/3" />
              <p class="hover:text-sky-600 md:text-2xl">{{ mr.title }}</p>
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
              @click.stop="takeMeToPdf(book.name)"
            >
              <a @click.stop="takeMeToPdf(book.name)">
                <img
                  :src="`images/${book.img}`"
                  :alt="book.title"
                  class="w-24 hover:scale-150 transition-all duration-1000"
                />
              </a>
              <div class="flex-col">
                <div>
                  <p class="hover:text-sky-600">
                    <a @click.stop="takeMeToPdf(book.name)">{{ book.title }}</a>
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

        <div class="p-3 m-2x text-xl text-center font-Inter">
          <h4 class="text-4xl mt-4">Our Software</h4>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://gis.predictiveanalytics.africa"
              class="cursor-pointer text-4xl mt-4"
            >
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >Location Intelligence.</span
              >
            </a>
          </div>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://app.abonten.com"
              class="cursor-pointer text-4xl mt-4"
            >
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >Out of Home Media Marketing.</span
              >
            </a>
          </div>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://ai.predictiveanalytics.africa"
              class="cursor-pointer text-4xl mt-4"
            >
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >Artificial Intelligence.</span
              >
            </a>
          </div>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://app.predictiveanalytics.co.ke"
              class="cursor-pointer text-4xl mt-4"
            >
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >Data App.</span
              >
            </a>
          </div>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://charts.predictiveanalytics.co.ke"
              class="cursor-pointer text-4xl mt-4"
            >
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >Visualizations.</span
              >
            </a>
          </div>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://apps.apple.com/us/app/predictive-analytics/id1584977537"
              class="cursor-pointer text-4xl mt-4"
            >
              Download our
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >ios App.</span
              >
            </a>
          </div>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.predictiveanalytics.app&hl=en&gl=US"
              class="cursor-pointer text-4xl mt-4"
            >
              Download Our
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >android App.</span
              >
            </a>
          </div>

          <div class="h-9 m-3 justify-center flex flex-wrap">
            <a
              href="https://www.predictiveanalytics.co.ke/blog"
              class="cursor-pointer text-4xl mt-4"
            >
              Read Our
              <span
                class="text-green-400 hover:border-b-2 hover:border-green-600"
                >Blog.</span
              >
            </a>
          </div>
        </div>

        <div
          class="
            p-2
            mt-10
            text-xl text-center
            font-Inter
            shadow-lg
            hover:-translate-y-1 hover:border
            duration-700
            border-t border-green-200
          "
        >
          <h4 class="text-4xl mt-4">Get a Scholarship.</h4>
          <p>We would like to offer Scholarships in following areas:</p>
          <div class="m-3 justify-center flex flex-wrap">
            <div class="h-15 bg-slate-100 m-2 flex justify-center items-center">
              <img src="images/excel.svg" class="h-10" alt="" />
              <h4 class="text-xl font-Poppins p-3">Excel Analysis</h4>
            </div>
            <div class="h-15 bg-slate-100 m-2 flex justify-center items-center">
              <img src="images/powerbi.svg" class="h-10" alt="" />
              <h4 class="text-xl font-Poppins p-3">Power BI</h4>
            </div>
            <div class="h-15 bg-slate-100 m-2 flex justify-center items-center">
              <img src="images/gis.png" class="h-10" alt="" />
              <h4 class="text-xl font-Poppins p-3">GIS Analysis</h4>
            </div>
            <div class="h-15 bg-slate-100 m-2 flex justify-center items-center">
              <img src="images/iot.svg" class="h-10" alt="" />
              <h4 class="text-xl font-Poppins p-3">
                IOT and Blockchain for Business
              </h4>
            </div>
          </div>

          <p class="text-center">
            The Tuition is 100% free but there is a small fee of
            <span
              class="text-green-600 hover:border-b-2 hover:border-green-600"
            >
              Ksh 9,500
            </span>
            or
            <span class="text-green-600 hover:border-b-2 hover:border-green-600"
              >$100 </span
            >for registration, exam certification and Work Project
            Implementation Coaching.
          </p>

          <p>
            If interested join the WhatsApp group and we will match you with the
            next cohort in line to start a course.
          </p>
          <p>Remember to indicate with course you select.</p>

          <div class="mx-auto flex justify-center">
            <div
              class="
                h-15
                w-52
                m-2
                flex
                justify-center
                items-center
                bg-slate-100
              "
            >
              <a href="https://chat.whatsapp.com/JYxec69VS0cEudSVSWDQLD">
                <img
                  src="images/whatsapp.svg"
                  class="h-9 hover:scale-150 transition-all duration-1000"
                  alt=""
                />
              </a>
              <a href="https://chat.whatsapp.com/JYxec69VS0cEudSVSWDQLD">
                <button
                  class="
                    text-xl
                    font-Poppins
                    p-3
                    hover:scale-110
                    transition-all
                    duration-1000
                  "
                >
                  Click to join.
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
    <transition name="tray">
      <sign-up
        v-if="showModal"
        @close-modal="showModal = false"
        @redirect-url="continueToUrl = true"
      ></sign-up>
    </transition>
  </main>
</template>

<script>
import { tryLogin } from "../helpers/auth";

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
      marketing: [
        {
          title: "SALES",
          img: "sales.svg",
          link: "https://saleskpis.predictiveanalytics.co.ke/",
        },
        {
          title: "DEMOGRAPHICS",
          img: "population.svg",
          link: "https://countrymeters.info/en/World#:~:text=As%20of%201%20January%202022,number%20of%20deaths%20by%2096%2C617%2C035",
        },
        {
          title: "MAGIC SOURCE",
          img: "magic.svg",
          link: "https://applymagicsauce.com/demo",
        },
        {
          title: "POPULATION",
          img: "world_pop.svg",
          link: "https://www.worldometers.info/world-population/",
        },
      ],
      continueToUrl: false,
      currentRedirectLink: null,
      linkType: "",
    };
  },
  methods: {
    async takeMeToLink(hr) {
      this.currentRedirectLink = hr.link;
      await this.signUp();
    },

    async signUp() {
      const token = await tryLogin();
      if (token) {
        return (this.continueToUrl = true);
      }
      this.showModal = true;
    },

    async takeMeToPdf(bookName) {
      this.linkType = "pdf";
      this.currentRedirectLink = bookName;
      await this.signUp();
    },
  },
  watch: {
    continueToUrl(status) {
      if (status) {
        console.log(this.currentRedirectLink);
        console.log(this.linkType);
        if (this.linkType === "pdf") {
          this.showModal = false;

          window.location.href = encodeURI(
            `${window.location.origin}/books/${this.currentRedirectLink}`
          );
        } else {
          this.showModal = false;
          window.location.href = this.currentRedirectLink;
        }
      }
    },
  },
};
</script>

<style>
.tray-enter,
.tray-leave-to {
  opacity: 0;
}

.tray-leave,
.tray-enter-to {
  opacity: 1;
}

.tray-enter-active,
.tray-leave-active {
  transition: opacity 1000ms;
}
</style>