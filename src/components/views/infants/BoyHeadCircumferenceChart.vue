<template>
  <GrowthChart 
    csv-file="b_age_headc.csv" 
    :chart-title="$t('chart.boy.headc.chart_title')" :table-title="$t('chart.boy.headc.table_title')"
    :table-subtitle="$t('chart.boy.headc.table_subtitle')" 
    :table-measurement="$t('chart.boy.headc.table_measurement')" 
    :y-axis="yAxisConfig"
  />
</template>

<script>
import GrowthChart from "@/components/views/GrowthChart.vue";
export default {
  name: "BoyHeadCircumferenceChart",
  components: { GrowthChart },
  data() {
    return {
      yAxisConfig: {
        title: {
          text: this.$t("chart.boy.headc.y_axis_title"),
        },
        decimalsInFloat: 2,
        // min: 0,
        // max: 17
      },
    };
  },
};
</script>