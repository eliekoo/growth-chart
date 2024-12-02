<template>
  <GrowthChart 
    csv-file="g_age_headc.csv" 
    chart-title="Girl Head Circumference Chart (0-24 months)" table-title="Girl Head Circumference"
    table-subtitle="Head Circumference" 
    table-measurement="cm" 
    :y-axis="yAxisConfig"
  />
</template>

<script>
import GrowthChart from "./GrowthChart.vue";
export default {
  name: "GirlHeadCircumferenceChart",
  components: { GrowthChart },
  yAxisConfig: {
    title: {
        text: "Head Circumference (cm)"
    },
    decimalsInFloat: 2,
    // min: 0,
    // max: 17
  }
};
</script>