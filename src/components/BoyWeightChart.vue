<template>
  <GrowthChart csv-file="b_age_weight.csv" chart-title="Boy Weight Chart (0-24 months)" table-title="Boy weight" :y-axis="yAxisConfig"/>
</template>

<script>
import GrowthChart from "./GrowthChart.vue";
export default {
  name: "BoyWeightChart",
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
