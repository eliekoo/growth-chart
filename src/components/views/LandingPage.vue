<template>
    <div class="landing-page">
      <div class="content">
        <h1>Welcome to Growth Tracker</h1>
        <p>Select your child's age category to proceed:</p>
        <div class="options">
          <button @click="redirectTo('fetal')">Fetal Growth Chart</button>
          <button @click="redirectTo('infant')">Infant (0-2 Years)</button>
          <button @click="redirectTo('kid')">Kids (2-5 Years)</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
    methods: {
      redirectTo(category) {
        if (category === "fetal") {
          this.$router.push("/fetal");
        } else if (category === "infant") {
          this.$router.push("/infant");
        } else if (category === "kid") {
          this.$router.push("/kid");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .landing-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
    text-align: center;
  }
  .content {
    max-width: 500px;
  }
  .options button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
    color: #6a11cb;
    transition: all 0.3s;
  }
  .options button:hover {
    background-color: #2575fc;
    color: white;
  }
  </style>
  