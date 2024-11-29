<!-- <template>
  <div>
    <h2>Growth Chart with Input</h2> -->
<!-- Almost done, left data validation & user input length connection -->
    <!-- Table for Input -->
    <!-- <div class="table-container">
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
    </div>-->

   <!-- Chart -->
    <!-- <div class="chart-container">
      <VueApexCharts
        ref="weightGrowthChart"
        type="line"
        :options="chartOptions"
        :series="combinedChartSeries"
        height="350"
      />
    </div>
  </div>
</template> --> 

<template>
  <div class="growth-chart-container">

    <!-- Left: Chart Container -->
    <div class="chart-column">
      <div class="chart-container">
        <VueApexCharts
          ref="weightGrowthChart"
          type="line"
          :options="chartOptions"
          :series="combinedChartSeries"
          height="100%"
        />
      </div>
    </div>

    <!-- Right: Table Container -->
    <div class="table-column">
      <h2>User Input</h2>
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
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "weightGrowthChart",
  components: {
    VueApexCharts
  },
  data() {
    return {
      // User input data for weight, initialized with null values
      weights: Array(25).fill(null), // Months 0-24
      chartOptions: Object.freeze({
        chart: {
          id: "growth-chart",
          type: 'line',
          height: 'auto',
          width: 'auto',
          toolbar: {
            show: true,
            tools: {
              download: true // Disable default download option
            },
            customIcons: [
              {
                icon: `
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                  </svg>
                `,
                title: "More Options",
                index: 0,
                class: "custom-menu-icon",
                click: function(chart, options, e) {
                  console.log(chart, options, e);
                  const exportMenu = document.getElementById("export-menu");
                  exportMenu.style.display = exportMenu.style.display === "block" ? "none" : "block";
                }
              }
            ]
          }
        },
        colors: ['#eab1a1','#ffe7c7', '#e1f8dc',"#caf1de", "#acddde"],
        xaxis: {
          categories: Array.from({ length: 25 }, (_, i) => i), // Months 0-24
          title: {
            text: "Months"
          }
        },
        yaxis: {
          title: {
            text: "Weight (kg)"
          },
          decimalsInFloat: 2,
          min: 0,
          max: 17
        },
        stroke: {
          curve: "monotoneCubic"
        },
        title: {
          text: "Boy weightGrowth Chart (0-24 Months)",
          align: "center"
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          position: 'top',
        },
        tooltip: {
          shared: false,
          intersect: false,
        }
      }),
      // Initial data for percentiles (just an example)
      initialChartData: [
        {
          name: "Below Average : 2nd Percentile",
          data: [
            2.459312, 3.39089, 4.31889, 5.018434, 5.561377, 5.996672, 6.352967,
            6.653301, 6.913126, 7.144822, 7.356558, 7.55441, 7.742219, 7.922091,
            8.095984, 8.265127, 8.430734, 8.593128, 8.752902, 8.909889,
            9.065209, 9.219037, 9.371554, 9.522741, 9.672527
          ]   
        },
        {
          name: "Minimum average: 5th Percentile",
          data: [2.603994,3.566165,4.522344,5.240269,5.797135,6.244465,6.611702,6.922131,7.19127,7.431644,7.651572,7.857229,8.052577,8.239848,8.421033,8.597424,8.770274,8.939942,9.107002,9.27136,9.434095,9.595435,9.755556,9.914417,10.07194
          ],
        },
        {
          name: "Average: 50th Percentile",
          data: [
            3.3464, 4.4709, 5.5675, 6.3762, 7.0023, 7.5105, 7.934, 8.297,
            8.6151, 8.9014, 9.1649, 9.4122, 9.6479, 9.8749, 10.0953, 10.3108,
            10.5228, 10.7319, 10.9385, 11.143, 11.3462, 11.5486, 11.7504,
            11.9514, 12.1515
          ]
        },
        {
          name: "Max average: 95th Percentile",
          data: [ 4.214527, 5.542933, 6.798348, 7.708329, 8.412602, 8.991445, 9.481939, 9.908738, 10.28713, 10.63055, 10.94868, 11.24845, 11.53526, 11.81281, 12.08325, 12.34891, 12.61125, 12.87128, 13.12906, 13.38579, 13.64181, 13.89795, 14.15453, 14.41108, 14.66753
          ]
        },
        {
          name: "Above average: 98th Percentile",
          data: [ 4.419354, 5.798331, 7.090758, 8.024169, 8.746662, 9.342238, 9.848832, 10.29113, 10.68428, 11.04177, 11.37341, 11.6862, 11.98574, 12.27589, 12.55884, 12.83707, 13.11206, 13.38491, 13.65558, 13.92552, 14.19492, 14.46469, 14.7352, 15.0059, 15.27674
          ],
        }
      ],
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
          markers: {
            size: 5 // Dots for the user input line
          },
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
        this.$refs.weightGrowthChart.updateSeries(this.combinedChartSeries);
      });
    },
    saveAsImage() {
      // Use ApexCharts' built-in export feature
      this.$refs.weightGrowthChart.chart.exportFile("growth-chart");
    }
  }
};
</script>

<style scoped>
/* Container for the two-column layout */
.growth-chart-container {
  display: flex;
  flex-wrap: wrap; /* Ensures responsiveness */
  width: 100%;
  gap: 16px; /* Adds space between columns */
}

/* Left Column (Table Input) */
.table-column {
  flex: 1 1 33%; /* Take 1/3 of the width */
  max-width: 33%; /* Prevent overflowing */
  box-sizing: border-box; /* Include padding and borders in width */
}

/* Right Column (Chart) */
.chart-column {
  flex: 2 1 66%; /* Take 2/3 of the width */
  max-width: 66%; /* Prevent overflowing */
  box-sizing: border-box;
}

/* Table Styling */
.table-container {
  width: 100%;
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

input[type="number"] {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}

/* Chart Styling */
.chart-container {
  width: 100%;
  height: 700px; 
}


/* Responsive Adjustments */
@media (max-width: 768px) {
  .growth-chart-container {
    flex-direction: column; /* Stack columns vertically */
  }

  .table-column,
  .chart-column {
    max-width: 100%; /* Full width for each section */
    flex: 1 1 100%; /* Take full width */
  }
}
</style>

