<template>
  <GrowthChart 
    csv-file="g_age_headc.csv" 
    :chart-title="$t('chart.girl.headc.chart_title')" :table-title="$t('chart.girl.headc.table_title')"
    :table-subtitle="$t('chart.girl.headc.table_subtitle')" 
    :table-measurement="$t('chart.girl.headc.table_measurement')" 
    :y-axis="yAxisConfig"
  />
</template>

<script>
import GrowthChart from "./GrowthChart.vue";
export default {
  name: "GirlHeadCircumferenceChart",
  components: { GrowthChart },
  data() {
    return {
      yAxisConfig: {
        title: {
          text: this.$t("chart.girl.headc.y_axis_title"),
        },
        decimalsInFloat: 2,
        // min: 0,
        // max: 17
      },
    };
  },
};
</script>