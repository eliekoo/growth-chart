<template>
    <div class="container mx-auto py-8">
      <h1 class="text-2xl font-semibold text-gray-800 mb-6">Understanding Percentiles on a Graph</h1>
      <p class="text-gray-700 text-sm leading-relaxed mb-4">
        Percentiles are a useful statistical measure that helps in understanding how a value compares to other data points in a dataset. When represented on a graph, percentiles provide a clear visual of where a specific value lies in comparison to others.
      </p>
      <p class="text-gray-700 text-sm leading-relaxed mb-4">
        On a growth chart, percentiles such as <strong>P3</strong>, <strong>P15</strong>, <strong>P50 (Median)</strong>, <strong>P85</strong>, and <strong>P97</strong> are used to display how a child's measurements (weight, height, etc.) compare with other children of the same age and gender.
      </p>
  
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Key Percentiles to Know</h3>
        <ul class="list-inside space-y-3 text-sm">
          <li>
            <strong>P50 (50th Percentile)</strong>: This is the median. If a child's measurement is at the P50 line, it indicates that 50% of children fall below this value and 50% are above.
          </li>
          <li>
            <strong>P3 (3rd Percentile)</strong>: If a child’s measurement is at or below P3, it means they are smaller than 97% of children in the same age group.
          </li>
          <li>
            <strong>P97 (97th Percentile)</strong>: A measurement above P97 means the child is larger than 97% of other children.
          </li>
        </ul>
      </div>
  
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">How to Read a Growth Chart?</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          When looking at a growth chart, it's important to note that a child’s percentile should be considered alongside other factors like their overall health and family history. A child in the 50th percentile is not necessarily average in terms of health, but it provides a benchmark to compare their growth.
        </p>
        <p class="text-gray-700 text-sm leading-relaxed">
          Percentile lines on the graph, such as P3, P15, P50, P85, and P97, provide a reference for where the child’s measurements lie. However, always consult a healthcare provider if you have concerns about your child’s growth.
        </p>
      </div>
  
      <div class="text-center mt-6">
        <router-link to="/" class="btn btn-primary text-sm">Back to Home</router-link>
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
  