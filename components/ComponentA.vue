<template>
    <div>
        <h1>Component A</h1>

        <button @click="$emit('customEvent', 'Hello from child!')">
            Emit Event
        </button>

        <p>{{ message }}</p>

    </div>
</template>

<script setup lang="ts">
defineProps<{ message?: string }>();
</script>