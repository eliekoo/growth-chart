<template>
  <GrowthChart 
    csv-file="b_age_length.csv" 
    :chart-title="$t('chart.boy.height.chart_title')" :table-title="$t('chart.boy.height.table_title')"
    :table-subtitle="$t('chart.boy.height.table_subtitle')" 
    :table-measurement="$t('chart.boy.height.table_measurement')" 
    :y-axis="yAxisConfig"
  />
</template>

<script>
import GrowthChart from "./GrowthChart.vue";
export default {
  name: "BoyHeightChart",
  components: { GrowthChart },
  data() {
    return {
      yAxisConfig: {
        title: {
          text: this.$t("chart.boy.height.y_axis_title"),
        },
        decimalsInFloat: 2,
        // min: 0,
        // max: 17
      },
    };
  },
};
</script>