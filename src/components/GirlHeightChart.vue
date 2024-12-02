<template>
  <div id="app">
    <h1>CSV Data Parsing</h1>
    <select v-model="selectedFile" @change="loadCSV">
      <option value="" disabled>Select a CSV File</option>
      <option v-for="file in csvFiles" :key="file" :value="file">{{ file }}</option>
    </select>

    <div v-if="parsedData">
      <h2>Parsed Data:</h2>
      <div v-for="(dataset, index) in parsedData.datasets" :key="index">
        <h3>{{ dataset.label }}</h3>
        <ul>
          <li v-for="(value, idx) in dataset.data" :key="idx">{{ value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      csvFiles: ["b_age_length.csv", "b_age_weight.csv"], // List your CSV files here
      selectedFile: "",
      parsedData: null // To store parsed CSV data
    };
  },
  methods: {
    // Load and parse the selected CSV file
    async loadCSV() {
      if (!this.selectedFile) return;

      try {
        const response = await fetch(`/data/${this.selectedFile}`);
        if (!response.ok) throw new Error("Failed to fetch CSV");

        const csvContent = await response.text();
        this.parsedData = this.parseCSV(csvContent);
      } catch (error) {
        console.error("Error loading CSV:", error);
      }
    },
    // Parse the CSV content
    parseCSV(content) {
      const rows = content.split("\n").filter((row) => row.trim() !== "");
      const headers = rows[0].split(","); // First row as headers
      const dataRows = rows.slice(1).map((row) => row.split(",").map(Number)); // Remaining rows as data

      const datasets = headers.slice(1).map((header, index) => {
        const data = dataRows.map((row) => row[index + 1]); // Skip the first column (Month)
        return { label: header.trim(), data };
      });

      const labels = dataRows.map((row) => row[0]); // First column (Month) as labels
      return { labels, datasets };
    }
  },
  watch: {
    // Automatically load CSV when a file is selected
    selectedFile() {
      if (this.selectedFile) {
        this.loadCSV();
      }
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
select {
  margin-bottom: 20px;
}
</style>
