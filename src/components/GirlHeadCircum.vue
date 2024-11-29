<template>
    <div>
      <VueApexCharts
        type="area"
        :options="chartOptions"
        :series="chartSeries"
        height="350"
      />
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
        chartOptions: {
          chart: {
            type: "area",
            height: 350,
          },
          xaxis: {
            categories: Array.from({ length: 13 }, (_, i) => i), // 0 to 12 months
            title: { text: "Age (Months)" },
          },
          yaxis: {
            title: { text: "Weight (kg)" },
          },
          colors: ["#1E90FF", "#FFD700", "#32CD32", "#FF4500"], // Blue, Yellow, Green, Red
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.5,
              opacityTo: 0.1,
              stops: [0, 100],
            },
          },
          stroke: {
            curve: "smooth",
            width: [2, 0, 2], // Second series is area-only (no stroke)
          },
          tooltip: {
            shared: true,
            intersect: false,
          },
          legend: {
            position: "top",
          },
        },
        chartSeries: [
          {
            name: "2nd Percentile",
            data: [
              2.459312, 3.39089, 4.31889, 5.018434, 5.561377, 5.996672, 6.352967,
              6.653301, 6.913126, 7.144822, 7.356558, 7.55441, 7.742219,
            ],
          },
          {
            name: "Between 2nd & 50th",
            data: [
              [2.459312, 3.3464], [3.39089, 4.4709], [4.31889, 5.5675],
              [5.018434, 6.3762], [5.561377, 7.0023], [5.996672, 7.5105],
              [6.352967, 7.934], [6.653301, 8.297], [6.913126, 8.6151],
              [7.144822, 8.9014], [7.356558, 9.1649], [7.55441, 9.4122],
              [7.742219, 9.6479],
            ].map(([low, high], idx) => ({
              x: idx,
              y: low,
              y2: high,
            })),
          },
          {
            name: "50th Percentile",
            data: [
              3.3464, 4.4709, 5.5675, 6.3762, 7.0023, 7.5105, 7.934, 8.297, 8.6151,
              8.9014, 9.1649, 9.4122, 9.6479,
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  