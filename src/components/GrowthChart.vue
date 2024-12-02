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
        </div>
      </div>
  
      <div class="table-column">
        <h2>{{ tableTitle }}</h2>
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
    name: "GrowthChartBase",
    components: { VueApexCharts },
    props: {
      csvFile: { type: String, required: true },
      tableTitle: { type: String, default: "Growth Chart" },
      chartTitle: { type: String, default: "Growth Line" },
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
            }
            },
            // colors: ['#eab1a1','#ffe7c7', '#e1f8dc',"#caf1de", "#acddde"],
            colors: ['#f8d7da','#fff3cd','#e2e3e5', '#e2e3e5','#d4edda', '#e2e3e5', '#e2e3e5','#e2e3e5', '#e2e3e5','#f09c0a'],
            xaxis: {
            categories: Array.from({ length: 25 }, (_, i) => i), // Months 0-24
            title: {
                text: "Months"
            }
            },
            yaxis: { ...this.yAxis }, // Use the passed y-axis prop here
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
  
  <style scoped>
  .growth-chart-container {
    display: flex;
    gap: 16px;
    width: 100%;
  }
  .table-column {
    flex: 1;
  }
  .chart-column {
    flex: 2;
  }
  .table-container table {
    width: 100%;
    border-collapse: collapse;
  }
  .table-container th,
  .table-container td {
    border: 1px solid #ccc;
    text-align: center;
    padding: 8px;
  }
  .chart-container {
    height: 700px;
  }
  </style>
  