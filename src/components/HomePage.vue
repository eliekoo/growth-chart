<template>
    <header class="app-header">
        <h1>Infant Growth Chart (0 - 24 months)</h1>
        <div class="button-group">
          <div class="option-group">
            <label>Gender:</label>
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
          <label>Chart:</label>
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
      <!-- Left Card: What is a Percentile -->
      <CardView class="max-w-sm mx-auto">
        <template v-slot:header>
          <h5 class="text-lg font-medium text-gray-800">What is a Percentile?</h5>
        </template>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">Percentile is a statistical measure that indicates the relative position of a value within a dataset. It tells you the percentage of data points that fall below a specific value.</p>
        <p><br></p>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">For example:</p>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">If your child's weight is in the <span class="font-semibold text-blue-600">60th percentile</span>, it means <strong>60%</strong> of children weigh less than your child, and <strong>40%</strong> weigh more.</p>
      </CardView>
  
      <!-- Right Card: How to Read Percentile on a Graph -->
      <CardView class="max-w-sm mx-auto">
        <template v-slot:header>
          <h5 class="text-lg font-medium text-gray-800">How to Read Percentile on a Graph?</h5>
        </template>
        <div class="text-gray-700 text-sm leading-relaxed">
          <ul class="list-inside space-y-2">
            <li><span class="font-semibold text-blue-600">Percentile lines</span> (e.g., P3, P15, P50, P85, P97) represent various percentiles.</li>
            <li><strong>P50 (50th Percentile)</strong>: The median, considered the average or normal value.</li>
            <li>If your child's measurements fall along or near the <span class="font-semibold text-blue-600">P50 line</span>, it is close to the average for their age and gender.</li>
            <li>Measurements between P3 and P97 are generally within the normal range. Falling below P3 or above P97 may warrant consulting a healthcare provider.</li>
          </ul>
        </div>
        <template v-slot:footer>
          <router-link to="/percentile-graph" class="btn btn-primary mt-4 text-sm">Learn More</router-link>
        </template>
      </CardView>
    </div>
  </div>
  
  
    <CardView>
      <div class="text-center">
        <select class="font-small rounded-lg text-sm px-4 py-2 inline-flex items-center" v-model="currentLocale" @change="changeLocale">
          <option value="en_us">English (US)</option>
          <option value="ms_my">Malay (Malaysia)</option>
          <option value="zh_tw">Chinese (Traditional)</option>
          <option value="zh_cn">Chinese (Simplified)</option>
        </select>
      </div>
      
      <div class="md:justify-between text-center">
        <div class="ml-3 footer-content mb-4 md:mb-0">
          <p class="disclaimer" v-html="$t('disclaimer')"></p>
          <p class="disclaimer" v-html="$t('note')"></p>
          <p class="data-source">
            Data source: 
            <a target="_blank" href="https://www.who.int/tools/child-growth-standards/standards">World Health Organization (WHO)</a> | 
            <a target="_blank" href="https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/8.Kesihatan_Kanak_Kanak/2.PDF/12_rekod_kesihatan_bayi_dan_kanak-kanak_0-6_tahun_-perempuan.pdf">Ministry of Health, Malaysia (Girl)</a>
          </p>
        </div>
      </div>
    </CardView>
  
      <FooterView></FooterView>
  </template>
  
  <script>
  import BoyWeight from "./BoyWeightChart.vue";
  import BoyHeight from "./BoyHeightChart.vue";
  import BoyHeadCircumference from "./BoyHeadCircumferenceChart.vue";
  
  import GirlHeight from "./GirlHeightChart.vue";
  import GirlWeight from "./GirlWeightChart.vue";
  import GirlHeadCircumference from "./GirlHeadCircumferenceChart.vue";
  
  import '../assets/app.css';
  import FooterView from "./FooterView.vue";
  import CardView from "./CardView.vue";
  
  
  export default {
    components: {
      BoyWeight,
      BoyHeight,
      BoyHeadCircumference,
      GirlHeight,
      GirlWeight,
      GirlHeadCircumference,
      FooterView,
      CardView
    },
    data() {
      return {
        currentLocale: this.$i18n.locale,
        selectedGender: "boy",
        selectedChart: "boy-weight",
        genders: [
          { value: "boy", label: "Boy" },
          { value: "girl", label: "Girl" },
        ],
        charts: {
          boy: [
            { value: "boy-weight", label: "Weight" },
            { value: "boy-height", label: "Height" },
            { value: "boy-headcircum", label: "Head Circumference" },
          ],
          girl: [
            { value: "girl-weight", label: "Weight" },
            { value: "girl-height", label: "Height" },
            { value: "girl-headcircum", label: "Head Circumference" },
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
      // Dynamically load Google AdSense script
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.onload = () => {
        // Push the ad code once the script is loaded
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };
      document.head.appendChild(script);
    }
  };
  </script>
  
  
  