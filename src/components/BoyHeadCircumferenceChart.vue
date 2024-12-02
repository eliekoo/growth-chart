<template>
  <GrowthChart 
    csv-file="b_age_headc.csv" 
    chart-title="Boy Head Circumference Chart (0-24 months)" table-title="Boy Head Circumference"
    table-subtitle="Head Circumference" 
    table-measurement="cm" 
    :y-axis="yAxisConfig"
  />
</template>

<script>
import GrowthChart from "./GrowthChart.vue";
export default {
  name: "BoyHeadCircumferenceChart",
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