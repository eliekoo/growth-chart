<template>
  <div>
    <h2>Growth Chart with Input</h2>
<!-- Almost done, left data validation & user input length connection -->
    <!-- Table for Input -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Age (Months)</th>
            <th>Weight (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in weights" :key="index">
            <td>{{ index }}</td>
            <td>
              <input
                type="number"
                v-model="weights[index]"
                placeholder="Enter weight"
                @input="updateChart"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Chart -->
    <div class="chart-container">
      <VueApexCharts
        ref="growthChart"
        type="line"
        :options="chartOptions"
        :series="combinedChartSeries"
        height="350"
      />
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "GrowthChart",
  components: {
    VueApexCharts
  },
  data() {
    return {
      // User input data for weight, initialized with null values
      weights: Array(25).fill(null), // Months 0-24
      chartOptions: {
        chart: {
          id: "growth-chart"
        },
        xaxis: {
          categories: Array.from({ length: 25 }, (_, i) => i), // Months 0-24
          title: {
            text: "Months"
          }
        },
        yaxis: {
          title: {
            text: "Weight (kg)"
          }
        },
        stroke: {
          curve: "smooth"
        },
        markers: {
          size: 5
        },
        title: {
          text: "Growth Chart (0-24 Months)",
          align: "center"
        },
        fill: {
          opacity: 0.3
        }
      },
      // Initial data for percentiles (just an example)
      initialChartData: [
        {
          name: "2nd Percentile",
          data: [
            2.459312, 3.39089, 4.31889, 5.018434, 5.561377, 5.996672, 6.352967,
            6.653301, 6.913126, 7.144822, 7.356558, 7.55441, 7.742219, 7.922091,
            8.095984, 8.265127, 8.430734, 8.593128, 8.752902, 8.909889,
            9.065209, 9.219037, 9.371554, 9.522741, 9.672527
          ]
        },
        {
          name: "50th Percentile",
          data: [
            3.3464, 4.4709, 5.5675, 6.3762, 7.0023, 7.5105, 7.934, 8.297,
            8.6151, 8.9014, 9.1649, 9.4122, 9.6479, 9.8749, 10.0953, 10.3108,
            10.5228, 10.7319, 10.9385, 11.143, 11.3462, 11.5486, 11.7504,
            11.9514, 12.1515
          ]
        }
      ]
    };
  },
  computed: {
    // Combine the initial data with user input data and ensure that the line connects
    combinedChartSeries() {
      const userData = this.weights.map((weight) => {
        // If the weight is null, return null to skip that month in the chart, but keep the valid points connected
        return weight !== null ? weight : null;
      });

      return [
        ...this.initialChartData,
        {
          name: "User Input",
          data: userData
        }
      ];
    }
  },
  methods: {
    // Method to trigger chart update when user input changes
    updateChart() {
      // Force Vue to update the chart series
      this.$nextTick(() => {
        this.$refs.growthChart.updateSeries(this.combinedChartSeries);
      });
    }
  }
};
</script>

<style scoped>
.table-container {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 8px 12px;
  text-align: center;
  border: 1px solid #ccc;
}

.chart-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
