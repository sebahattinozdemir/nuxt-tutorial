<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useFetch } from '#app';
  
  const route = useRoute();
  const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
  </script>