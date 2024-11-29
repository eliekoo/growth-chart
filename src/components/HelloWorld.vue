<template>
  <div>
    <h2>Growth Chart with Input</h2>

    <div class="chart-container">
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
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Chart -->
      <div class="chart">
        <VueApexCharts
          type="line"
          :options="chartOptions"
          :series="chartSeries"
          height="350"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      weights: Array(13).fill(null), // Initial weights (13 months: 0-12)
    };
  },
  computed: {
    // Chart options for ApexCharts
    chartOptions() {
      return {
        chart: {
          type: "line",
          height: 350,
        },
        xaxis: {
          categories: Array.from({ length: 13 }, (_, i) => i), // Age in months (0-12)
          title: {
            text: "Age (Months)",
          },
        },
        yaxis: {
          title: {
            text: "Weight (kg)",
          },
        },
        colors: ["#1E90FF"],
        stroke: {
          curve: "smooth",
        },
        markers: {
          size: 5,
        },
      };
    },
    // Chart series based on user input
    chartSeries() {
      // Filter weights and ensure the graph line is connected
      const seriesData = this.weights.reduce((acc, weight, index) => {
        if (weight !== null) acc.push({ x: index, y: parseFloat(weight) });
        return acc;
      }, []);

      return [
        {
          name: "User Input Weight",
          data: seriesData,
        },
      ];
    },
  },
};
</script>

<style>
.chart-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.table-container {
  flex: 1;
  max-width: 300px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th, td {
  padding: 8px;
  border: 1px solid #ccc;
}

th {
  background-color: #f9f9f9;
}

input[type="number"] {
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
}

.chart {
  flex: 2;
}
</style>
