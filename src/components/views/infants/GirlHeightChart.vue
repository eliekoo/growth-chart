<template>
  <GrowthChart 
    csv-file="g_age_length.csv" 
    :chart-title="$t('chart.girl.height.chart_title')" :table-title="$t('chart.girl.height.table_title')"
    :table-subtitle="$t('chart.girl.height.table_subtitle')" 
    :table-measurement="$t('chart.girl.height.table_measurement')" 
    :y-axis="yAxisConfig"
  />
</template>

<script>
import GrowthChart from "@/components/views/GrowthChart.vue";
export default {
  name: "GirlHeightChart",
  components: { GrowthChart },
  data() {
    return {
      yAxisConfig: {
        title: {
          text: this.$t("chart.girl.height.y_axis_title"),
        },
        decimalsInFloat: 2,
        // min: 0,
        // max: 17
      },
    };
  },
};
</script>