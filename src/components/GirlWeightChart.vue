<template>
  <GrowthChart 
    csv-file="g_age_weight.csv" 
    chart-title="Girl Weight Chart (0-24 months)" table-title="Girl weight"
    table-subtitle="Weight" 
    table-measurement="kg" 
    :y-axis="yAxisConfig"
  />
</template>

<script>
import GrowthChart from "./GrowthChart.vue";
export default {
  name: "GirlWeightChart",
  components: { GrowthChart },
  data() {
    return {
      yAxisConfig: {
        title: {
            text: "Weight (kg)"
        },
        decimalsInFloat: 2,
        min: 0,
        max: 17
      }
    };
  }
};
</script>
