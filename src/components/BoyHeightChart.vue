<template>
  <GrowthChart csv-file="b_age_length.csv" chart-title="Boy Height Chart (0-24 months)" table-title="Boy Height" :y-axis="yAxisConfig"/>
</template>

<script>
import GrowthChart from "./GrowthChart.vue";
export default {
  name: "BoyHeightChart",
  components: { GrowthChart },
  yAxisConfig: {
    title: {
        text: "Height (cm)"
    },
    decimalsInFloat: 2,
    // min: 0,
    // max: 17
  }
};
</script>