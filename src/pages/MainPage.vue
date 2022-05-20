<template>
  <main class="bg-slate-200 flex justify-center font-sans">
    <article class="w-3/5 h-screen p-5 flex justify-center">
      <div class="w-full p-8 bg-white rounded-lg">
        <h3 class="text-5xl text-center p-5 font-semibold font-sans">
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
        <div class="p-3 m-2 text-3xl text-center font-Inter">
          <h3 class="text-5xl font-mono">Get Access to Free resources</h3>
          <h4 class="text-4xl mt-4">Human Resources</h4>
          <div class="m-3 justify-center flex flex-wrap">
            <div
              class="
                w-2/5
                m-2
                h-40
                shadow-lg
                hover:-translate-y-2
                duration-700
                flex
                items-center
                justify-around
                p-2
              "
            >
              <img src="images/survey.svg" alt="survey" class="h-2/3" />
              <p>PREDICTIVE ANALYTICS SURVEYS</p>
            </div>
            <div
              class="
                w-2/5
                m-2
                h-40
                shadow-lg
                hover:-translate-y-2
                duration-700
                flex
                items-center
                justify-around
                p-2
              "
            >
              <img src="images/charts.png" alt="chart" class="h-2/3" />
              <p>CHARTS</p>
            </div>
            <div
              class="
                w-2/5
                m-2
                h-40
                shadow-lg
                hover:-translate-y-2
                duration-700
                flex
                items-center
                justify-around
                p-2
              "
            >
              <img src="images/kpi.png" alt="kpi" class="h-2/3" />
              <p>EMPLOYEE KPI</p>
            </div>
            <div
              class="
                w-2/5
                m-2
                h-40
                shadow-lg
                hover:-translate-y-2
                duration-700
                flex
                items-center
                justify-around
                p-2
              "
            >
              <img src="images/job.png" alt="job" class="h-2/3" />
              <p>JOBS</p>
            </div>
          </div>
        </div>
        <div class="p-3 m-2 text-xl text-center font-Inter">
          <h4 class="text-4xl mt-4">Downloads</h4>
          <div class="m-3 justify-center flex flex-wrap">
            <div
              class="
                w-2/5
                m-2
                h-40
                shadow-lg
                hover:-translate-y-2
                duration-700
                flex
                items-center
                justify-around
                p-2
              "
              v-for="book in books"
              :key="book.title"
            >
              <img :src="`images/${book.img}.png`" :alt="book.title" class="h-2/3" />
              <div class="flex-col">
                <div>
                  <p>{{book.title}}</p>
                </div>
                <div class="flex">
                  <p class="text-emerald-700">{{book.pages}} Pages:</p>
                  <p class="text-emerald-700">Size: {{book.size}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          img: "LIP_brochure.png",
          title: "Location Intelligence Platform",
          pages: "10",
          size: "1MB",
        },
        {
          img: "4IR_plan_brochure.png",
          title: "4IR PLAN",
          pages: "6",
          size: "4MB",
        },
        {
          img: "interviewer_framework.png",
          title: "Data Scientist Interviewer Framework",
          pages: "6",
          size: "3MB",
        },
        {
          img: "data_usecase_handbook.png",
          title: "DATA USECASE HANDBOOK",
          pages: "28",
          size: "14MB",
        },
      ],
    };
  },
};
</script>

<style>
</style>