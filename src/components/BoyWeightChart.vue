<template>
  <GrowthChart 
    csv-file="b_age_weight.csv" 
    :chart-title="$t('chart.boy.weight.chart_title')" :table-title="$t('chart.boy.weight.table_title')"
    :table-subtitle="$t('chart.boy.weight.table_subtitle')" 
    :table-measurement="$t('chart.boy.weight.table_measurement')" 
    :y-axis="yAxisConfig"
  />
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
          text: this.$t("chart.boy.weight.y_axis_title"),
        },
        decimalsInFloat: 2,
        // min: 0,
        // max: 17
      },
    };
  },
};
</script>
