<template>
  <GrowthChart 
    csv-file="g_age_weight.csv" 
    :chart-title="$t('chart.girl.weight.chart_title')" :table-title="$t('chart.girl.weight.table_title')"
    :table-subtitle="$t('chart.girl.weight.table_subtitle')" 
    :table-measurement="$t('chart.girl.weight.table_measurement')" 
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
          text: this.$t("chart.girl.weight.y_axis_title"),
        },
        decimalsInFloat: 2,
        // min: 0,
        // max: 17
      },
    };
  },
};
</script>
