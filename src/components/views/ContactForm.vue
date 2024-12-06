<template>
    <div class="contact-form">
      <form @submit.prevent="sendEmail">
        <div>
          <label for="subject">Subject</label>
          <input type="text" v-model="form.subject" id="subject" required />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" required></textarea>
        </div>
        <div>
          <label for="email">Your Email</label>
          <input type="email" v-model="form.email" id="email" required />
        </div>
  
        <div>
        <vue-recaptcha
          ref="recaptcha"
          :sitekey="siteKey"
          @verify="onVerify"
        />
        <span v-if="!recaptchaVerified" class="error">Please verify that you're not a robot.</span>
      </div>
        <div>
          <button type="submit" :disabled="!isCaptchaVerified">Send Message</button>
        </div>
      </form>
  
      <div v-if="status.message" :class="status.type">{{ status.message }}</div>
    </div>
  </template>
<script>
import emailjs from "emailjs-com";
import { useRecaptcha } from "vue-recaptcha-v3";

export default {
  components: {
    VueRecaptcha: useRecaptcha
  },
  data() {
    return {
      form: {
        subject: "",
        message: "",
        email: "",
      },
      status: {
        message: "",
        type: "", // 'success' or 'error'
      },
      siteKey: "6LfQX5QqAAAAAIVe31As4owhmAqpGedzvmuJFTFO",
      isCaptchaVerified: false,  // Store CAPTCHA verification status
    };
  },
  methods: {
    onCaptchaVerified(response) {
      console.log("reCAPTCHA verified:", response);
      this.isCaptchaVerified = true;
    },
    sendEmail() {
      if (!this.isCaptchaVerified) {
        this.status.message = "Please verify the reCAPTCHA.";
        this.status.type = "error";
        return;
      }

      // EmailJS Service ID, Template ID, and User ID
      const serviceID = "service_bdozxeo";  // Your Service ID
      const templateID = "template_05h2yj4";  // Your Template ID
      const userID = "user_LuEglr1g5ajPMmIckZfma";  // Replace with your EmailJS User ID

      const templateParams = {
        subject: this.form.subject,
        message: this.form.message,
        email: this.form.email,
      };

      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then(
          (response) => {
            console.log("Success", response);
            this.status.message = "Email sent successfully!";
            this.status.type = "success";
          },
          (error) => {
            console.log("Failed", error);
            this.status.message = "There was an error sending the email.";
            this.status.type = "error";
          }
        );
    },
  },
};
</script>  
  
  <style scoped>
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .contact-form button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .contact-form button:hover {
    background-color: #45a049;
  }
  .status {
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
  }
  .status.success {
    background-color: #dff0d8;
    color: #3c763d;
  }
  .status.error {
    background-color: #f2dede;
    color: #a94442;
  }
  </style>
  