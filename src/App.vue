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
      <!-- Global Footer -->
      <footer class="footer">
    <div class="footer-content">
      <p class="disclaimer">Disclaimer: This is a reference chart and not medical advice.</p>
      <p class="data-source">Data source: World Health Organization (WHO)</p>
      <p class="designer">
        Designed by <strong>Elie Koo</strong> - A full-time mother looking for a job while taking care of her baby.
      </p>
      <div class="adsense">
        <!-- Google AdSense code -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-XXXXXXX"
            data-ad-slot="XXXXXXX" 
            data-ad-format="auto"></ins>
      </div>
    </div>
    </footer>

  
</template>

<script>
import BoyWeight from "./components/BoyWeightChart.vue";
import BoyHeight from "./components/BoyHeightChart.vue";
import GirlHeight from "./components/GirlHeightChart.vue";
import GirlHeadCircum from "./components/GirlHeadCircum.vue";

export default {
  components: {
    BoyWeight,
    BoyHeight,
    GirlHeight,
    GirlHeadCircum,
  },
  data() {
    return {
      selectedGender: null,
      selectedChart: null,
      genders: [
        { value: "boy", label: "Boy" },
        { value: "girl", label: "Girl" },
      ],
      charts: {
        boy: [
          { value: "boy-weight", label: "Weight" },
          { value: "boy-height", label: "Height" },
        ],
        girl: [
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
      if (this.selectedChart === "girl-height") return "GirlHeight";
      if (this.selectedChart === "girl-headcircum") return "GirlHeadCircum";
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


<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

/* App Container */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

/* Header */
.app-header {
  text-align: center;
  margin-bottom: 20px;
}

.app-header h1 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.option-group {
  margin: 10px;
}

.option-group label {
  font-weight: bold;
  margin-right: 10px;
}

/* Buttons */
.option-button {
  padding: 10px 15px;
  margin: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, border-color 0.3s;
}

.option-button.active {
  background-color: #007bff;
  color: white;
  border-color: #0056b3;
}

.option-button:hover {
  background-color: #0056b3;
  color: white;
}

/* Main Section */
.app-main {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Global Footer Styles */
.footer {
  margin-top: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  border-top: 1px solid #ddd;
}

.footer-content p {
  margin: 5px 0;
  font-size: 14px;
}

.disclaimer {
  font-style: italic;
  color: #666;
}

.data-source {
  color: #333;
}

.designer {
  font-weight: bold;
  color: #333;
}

.adsense {
  margin-top: 15px;
}
</style>