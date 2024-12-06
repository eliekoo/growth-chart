<template>
    <NavigationBar />
    <header class="app-header">
        <h1>{{ $t("home.growth_chart") }}</h1>
        <div class="button-group">
          <div class="option-group">
            <label>{{ $t("home.gender") }}</label>
            <button
              v-for="gender in genders"
              :key="gender.value"
              :class="['option-button', { active: selectedGender === gender.value }]"
              @click="selectGender(gender.value)"
            >
              {{ gender.label }}
            </button>
          </div>
        </div>
  
        <div class="option-group" v-if="selectedGender">
          <label>{{ $t("home.chart") }}</label>
          <button
            v-for="chart in availableCharts"
            :key="chart.value"
            :class="['option-button', { active: selectedChart === chart.value }]"
            @click="selectChart(chart.value)"
          >
            {{ chart.label }}
          </button>
        </div>
      </header>
      <main class="app-main">
        <component :is="currentChart" />
      </main>
  
    <div class="mx-auto py-8 max-w-4xl">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <CardView class="max-w-sm mx-auto">
        <template v-slot:header>
          <h5 class="text-lg font-medium text-gray-800">{{ $t("description.perceptile_title") }}</h5>
        </template>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">{{ $t("description.perceptile_desc") }}</p>
        <p><br></p>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">{{ $t("description.for_example") }}</p>
        <p class="text-gray-700 text-sm leading-relaxed mb-3" v-html="$t('description.ex_desc')"></p>
      </CardView>
  
      <CardView class="max-w-sm mx-auto">
        <template v-slot:header>
          <h5 class="text-lg font-medium text-gray-800">{{ $t("description.how_to_read") }}</h5>
        </template>
        <div class="text-gray-700 text-sm leading-relaxed">
          <ul class="list-inside space-y-2">
            <li v-html="$t('description.perc_point1')"></li>
            <li v-html="$t('description.perc_point2')"></li>
            <li v-html="$t('description.perc_point3')"></li>
            <li>{{ $t("description.perc_point4") }}</li>
          </ul>
        </div>
        <template v-slot:footer>
          <router-link to="/percentile-graph" class="btn btn-primary mt-4 text-sm">{{ $t("description.learn_more") }}</router-link>
        </template>
      </CardView>
    </div>
  </div>
  
  
    <CardView>
      <div class="text-center">
        <select class="font-small rounded-lg text-sm px-4 py-2 inline-flex items-center" v-model="currentLocale" @change="changeLocale">
          <option value="en_us">{{ $t("locale.english") }}</option>
          <option value="ms_my">{{ $t("locale.malay") }}</option>
          <option value="zh_tw">{{ $t("locale.chinese_tw") }}</option>
          <option value="zh_cn">{{ $t("locale.chinese_cn") }}</option>
        </select>
      </div>
      
      <div class="md:justify-between text-center">
        <div class="ml-3 footer-content mb-4 md:mb-0">
          <p class="disclaimer" v-html="$t('footer.disclaimer')"></p>
          <p class="disclaimer" v-html="$t('footer.note')"></p>
          <p class="data-source"> {{ $t("footer.data_source") }}
            
            <a target="_blank" href="https://www.who.int/tools/child-growth-standards/standards">World Health Organization (WHO)</a> | 
            <a target="_blank" href="https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/8.Kesihatan_Kanak_Kanak/2.PDF/12_rekod_kesihatan_bayi_dan_kanak-kanak_0-6_tahun_-perempuan.pdf">Ministry of Health, Malaysia (Girl)</a>
          </p>
        </div>
      </div>
    </CardView>
  
      <FooterView></FooterView>
  </template>
  
  <script>
  import BoyWeight from "@/components/views/infants/BoyWeightChart.vue";
  import BoyHeight from "@/components/views/infants/BoyHeightChart.vue";
  import BoyHeadCircumference from "@/components/views/infants/BoyHeadCircumferenceChart.vue";
  
  import GirlHeight from "@/components/views/infants/GirlHeightChart.vue";
  import GirlWeight from "@/components/views/infants/GirlWeightChart.vue";
  import GirlHeadCircumference from "@/components/views/infants/GirlHeadCircumferenceChart.vue";
  
  import '@/assets/app.css';
  import FooterView from "./FooterView.vue";
  import CardView from "./CardView.vue";
  import NavigationBar from "@/components/views/NavigationBar.vue"; // Adjust the path if needed
  
  
  export default {
    components: {
      BoyWeight,
      BoyHeight,
      BoyHeadCircumference,
      GirlHeight,
      GirlWeight,
      GirlHeadCircumference,
      FooterView,
      CardView,
      NavigationBar
    },
    data() {
      return {
        currentLocale: this.$i18n.locale,
        selectedGender: "boy",
        selectedChart: "boy-weight",
        genders: [
          { value: "boy", label: this.$t("home.boy") },
          { value: "girl", label: this.$t("home.girl") },
        ],
        charts: {
          boy: [
            { value: "boy-weight", label: this.$t("home.weight") },
            { value: "boy-height", label: this.$t("home.height") },
            { value: "boy-headcircum", label: this.$t("home.headcircum") },
          ],
          girl: [
            { value: "girl-weight", label: this.$t("home.weight") },
            { value: "girl-height", label: this.$t("home.height") },
            { value: "girl-headcircum", label: this.$t("home.headcircum") },
          ],
        },
      };
    },
    computed: {
      availableCharts() {
        return this.selectedGender ? this.charts[this.selectedGender] : [];
      },
      currentChart() {
        // Dynamically determine which component to render
        if (this.selectedChart === "boy-weight") return "BoyWeight";
        if (this.selectedChart === "boy-height") return "BoyHeight";
        if (this.selectedChart === "boy-headcircum") return "BoyHeadCircumference";
        if (this.selectedChart === "girl-weight") return "GirlWeight";
        if (this.selectedChart === "girl-height") return "GirlHeight";
        if (this.selectedChart === "girl-headcircum") return "GirlHeadCircumference";
        return null; // Show nothing if no chart is selected
      },
    },
    methods: {
      selectGender(gender) {
        this.selectedGender = gender;
        this.selectedChart = null; // Reset chart selection when gender changes
      },
      selectChart(chart) {
        this.selectedChart = chart;
      },
      changeLocale() {
        this.$i18n.locale = this.currentLocale;
      }
    },
    mounted() {
    }
  };
  </script>
  
  
  