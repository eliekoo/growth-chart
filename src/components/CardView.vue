<template>
    <div class="mb-5 p-4 bg-white rounded-lg shadow md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <slot name="header"></slot> 
            </h5>
            <div class="font-normal text-gray-700 dark:text-gray-400">
                <slot></slot>
            </div>
            <div class="card-footer">
            <slot name="footer"></slot>
        </div>
      </div>
    </div>

  </template>
  
  <script>
  export default {
    name: 'CardView'
  };
  </script>
  
  <style scoped>
  .card-view {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .card-body {
    padding: 16px 0;
  }
  
  .card-footer {
    text-align: right;
    font-size: 0.875rem;
    color: gray;
  }
  </style>
  