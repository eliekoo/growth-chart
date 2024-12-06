<template>
    <BlogArticle
      heading="Understanding Growth Percentiles: What Every Parent Needs to Know"
      publishDate="December 6, 2024"
      author="Elie Koo"
      :paragraphs="[
        'When it comes to monitoring your child’s growth, percentiles are one of the most commonly used tools by healthcare providers.',
        'A growth percentile is a statistical measure that indicates how your child’s measurements (e.g., height, weight, or head circumference) compare to those of other children of the same age and gender.',
        'Percentiles provide a way to track your child’s growth over time. They allow healthcare providers to identify consistent growth patterns, detect potential growth delays or accelerations, and understand how your child’s growth compares to peers.',
        'Talk to your pediatrician if your child’s percentile drops or rises significantly, falls below the 3rd percentile or above the 97th percentile, or you notice unusual growth patterns.'
      ]"
      :images="[
        { src: '/images/article1.jpg', alt: 'Child growth chart example' },
        { src: '/images/article2.jpg', alt: 'Family discussing growth data' }
      ]"
    />
  </template>
  
  <script>
  import BlogArticle from "@/components/views/BlogArticle.vue";
  
  export default {
    components: { BlogArticle },
  };
  </script>
  