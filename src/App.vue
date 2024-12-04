<template>
  <div id="app">
    <header class="app-header">
      <h1>Growth Chart Selector</h1>
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

  </div>

  <div class="mb-5 p-4 bg-white rounded-lg shadow md:items-center md:justify-between md:p-6 dark:bg-gray-800 mb-5">
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
            <a target="_blank" href="https://www.who.int/tools/child-growth-standards/standards">World Health Organization (WHO)</a> | <a target="_blank" href="https://hq.moh.gov.my/bpkk/images/3.Penerbitan/2.Orang_Awam/8.Kesihatan_Kanak_Kanak/2.PDF/12_rekod_kesihatan_bayi_dan_kanak-kanak_0-6_tahun_-perempuan.pdf">Ministry of Health, Malaysia (Girl)</a>
            <!-- {{ $t('dynamic_message', { value: quantity }) }} -->
          </p>
        </div>
      </div>
    </div>
    <FooterView></FooterView>
</template>

<script>
import BoyWeight from "./components/BoyWeightChart.vue";
import BoyHeight from "./components/BoyHeightChart.vue";
import BoyHeadCircumference from "./components/BoyHeadCircumferenceChart.vue";

import GirlHeight from "./components/GirlHeightChart.vue";
import GirlWeight from "./components/GirlWeightChart.vue";
import GirlHeadCircumference from "./components/GirlHeadCircumferenceChart.vue";

import './assets/app.css';
import FooterView from "./components/FooterView.vue";


export default {
  components: {
    BoyWeight,
    BoyHeight,
    BoyHeadCircumference,
    GirlHeight,
    GirlWeight,
    GirlHeadCircumference,
    FooterView
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


