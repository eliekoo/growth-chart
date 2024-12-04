<template>
    <div class="growth-chart-container">
      <div class="chart-column">
        <div class="chart-container">
          <VueApexCharts
            ref="growthChart"
            type="line"
            :options="chartOptions"
            :series="combinedChartSeries"
            height="100%"
          />

          <!-- <div>
            <fwb-card>
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  What is a Percentile?
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Percentile is a statistical measure indicating the relative position of a value within a dataset. It tells you the percentage of data points that fall below a specific value.
                </p>
                <p class="example">Example: If your child's weight is in the 60th percentile, it means 60% of children weigh less than your child, and 40% weigh more.</p>
              </div>
            </fwb-card>

            <fwb-card href="#">
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  How to Read Percentile on a Graph?
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  v
                </p>
                <ul>
                  <li>Percentile lines (e.g., P3, P15, P50, P85, P97) represent various percentiles.</li>
                  <li><strong>P50 (50th Percentile):</strong> The median, considered the average or normal value.</li>
                  <li>If your child's measurements fall along or near the P50 line, it is close to the average for their age and gender.</li>
                  <li>Measurements between P3 and P97 are generally within the normal range. Falling below P3 or above P97 may warrant consulting a healthcare provider.</li>
                </ul>
              </div>
            </fwb-card>
                
          </div> -->
        </div>
      </div>
  
      <div class="table-column">
        <h2>{{ tableTitle }}</h2>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Age (Months)</th>
                <th>{{tableSubtitle}} ({{ tableMeasurement }})</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in weights" :key="index">
                <td>{{ index }}</td>
                <td>
                  <fwb-input 
                      type="number"
                      v-model="weights[index]"
                      :placeholder="tableTitle"
                      @input="updateChart" 
                      size="sm" 
                    />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  

  <script setup>
    import { FwbInput } from 'flowbite-vue'
    // import { FwbCard } from 'flowbite-vue'
  </script>

  <script>
  import VueApexCharts from "vue3-apexcharts";
  import '/src/assets/chart.css';
  
  export default {
    name: "GrowthChartBase",
    components: { VueApexCharts },
    props: {
      csvFile: { type: String, required: true },
      chartTitle: { type: String, default: "Growth Line" },
      tableTitle: { type: String, default: "Growth Chart" },
      tableSubtitle: { type: String, default: "Value" },
      tableMeasurement: { type: String, default: "cm" },
      yAxis: { type: Object, required: true }
    },
    data() {
      return {
        initialChartData: [],
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
              },
              zoom: {
                enabled: this.isMobile() ? false : true, // Disable zoom on mobile
              },
            },
            // colors: ['#eab1a1','#ffe7c7', '#e1f8dc',"#caf1de", "#acddde"],
            colors: ['#f8d7da','#fff3cd','#e2e3e5', '#e2e3e5','#d4edda', '#e2e3e5', '#e2e3e5','#e2e3e5', '#e2e3e5','#f09c0a'],
            xaxis: {
            categories: Array.from({ length: 25 }, (_, i) => i), // Months 0-24
            title: {
                text: "Months"
            }
            },
            yaxis: { ...this.yAxis, decimalsInFloat: 2, }, // Use the passed y-axis prop here
            stroke: {
            curve: "monotoneCubic"
            },
            title: {
            text:  this.chartTitle, 
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
      };
    },
    computed: {
      combinedChartSeries() {
        const userData = this.weights.map((w) => (w !== null ? w : null));
        return [
          ...this.initialChartData,
          { name: "User Input", data: userData }
        ];
      }
    },
    methods: {
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
      async loadCSV() {
          
          try {
            const response = await fetch(`/data/${this.csvFile}`);
            const csvContent = await response.text();
            this.initialChartData = this.parseCSV(csvContent);
            console.log("load csv",this.initialChartData);
        } catch (err) {
          console.error("Error loading CSV:", err);
        }
      },
      parseCSV(content) {
        const rows = content.split("\n").filter(Boolean);
        const headers = rows[0].split(",");
        const dataRows = rows.slice(1).map((row) => row.split(",").map(Number));
        return headers.slice(1).map((header, index) => ({
          name: header.trim(),
          data: dataRows.map((row) => row[index + 1])
        }));
      },
      updateChart() {
        this.$nextTick(() => {
          this.$refs.growthChart.updateSeries(this.combinedChartSeries);
        });
      }
    },
    mounted() {
      this.loadCSV();
    }
  };
  </script>
  