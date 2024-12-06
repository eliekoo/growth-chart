<template>
    <div class="blog-article mx-auto max-w-3xl p-6">
      <!-- Article Metadata -->
      <header class="border-b pb-4 mb-6">
        <h1 class="text-3xl font-bold mb-2">{{ heading }}</h1>
        <div class="text-sm text-gray-500">
          <span>Published on: {{ publishDate }}</span>
          <span class="ml-4">By: {{ author }}</span>
        </div>
      </header>
  
      <!-- Image Section -->
      <section v-if="images.length" class="image-section mb-6">
        <h2 class="text-lg font-bold mb-4">Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="rounded shadow-sm"
          />
        </div>
      </section>
  
      <!-- Article Content -->
      <article class="prose lg:prose-lg">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </article>
  
      <!-- Comments Section -->
      <section class="comments mt-10">
        <h2 class="text-xl font-bold mb-4">Comments</h2>
        <ul>
          <li
            v-for="(comment, index) in comments"
            :key="index"
            class="border-b py-4"
          >
            <p class="font-semibold">{{ comment.name }}</p>
            <p class="text-gray-600">{{ comment.message }}</p>
          </li>
        </ul>
        <div class="mt-6">
          <h3 class="text-lg font-bold mb-2">Leave a Comment</h3>
          <form @submit.prevent="addComment">
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Name</label>
              <input
                v-model="newComment.name"
                type="text"
                placeholder="Your name"
                class="w-full border rounded p-2"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Comment</label>
              <textarea
                v-model="newComment.message"
                placeholder="Your comment"
                class="w-full border rounded p-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="mt-10 pt-6 border-t">
        <p class="text-sm text-gray-500 text-center">
          &copy; 2024 Elie Koo. All rights reserved.
        </p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogArticle",
    props: {
      heading: {
        type: String,
        required: true,
      },
      publishDate: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      paragraphs: {
        type: Array,
        required: true,
      },
      images: {
        type: Array,
        required: false,
        default: () => [],
      },
    },
    data() {
      return {
        comments: [],
        newComment: {
          name: "",
          message: "",
        },
      };
    },
    methods: {
      addComment() {
        if (this.newComment.name && this.newComment.message) {
          this.comments.push({ ...this.newComment });
          this.newComment.name = "";
          this.newComment.message = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-article {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .image-section img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  </style>
  