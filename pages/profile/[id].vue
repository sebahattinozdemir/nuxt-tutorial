<template>
    <div>
        <h1>Profile Page</h1>
        <p>Profile ID: {{ id }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const id = useRoute().params.id;
</script>