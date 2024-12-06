<template>
    <div class="container mx-auto py-8">
      <h1 class="text-2xl font-semibold text-gray-800 mb-6">{{ $t("knowledge.percentile_graph.title") }}</h1>
      <p class="text-gray-700 text-sm leading-relaxed mb-4">
        {{ $t("knowledge.percentile_graph.paragraph1") }}
      </p>
      <p class="text-gray-700 text-sm leading-relaxed mb-4" v-html="$t('knowledge.percentile_graph.paragraph2')"></p>
  
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t("knowledge.percentile_graph.key_percentiles") }}</h3>
        <ul class="list-inside space-y-3 text-sm">
          <li>
            <strong>{{ $t("knowledge.percentile_graph.p50") }}</strong>:{{ $t("knowledge.percentile_graph.p50_desc") }}
          </li>
          <li>
            <strong>{{ $t("knowledge.percentile_graph.p3") }}</strong>:{{ $t("knowledge.percentile_graph.p3_desc") }}
          </li>
          <li>
            <strong>{{ $t("knowledge.percentile_graph.p97") }}</strong>:{{ $t("knowledge.percentile_graph.p97_desc") }}
          </li>
        </ul>
      </div>
  
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t("knowledge.percentile_graph.step_read") }}</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{ $t("knowledge.percentile_graph.step1") }}
        </p>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{ $t("knowledge.percentile_graph.step2") }}
        </p>
      </div>
  
      <div class="text-center mt-6">
        <router-link to="/" class="btn btn-primary text-sm">{{ $t("knowledge.percentile_graph.home_button") }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PercentileGraphPage",
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  