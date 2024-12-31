<template>

  <hr />
  <div>
    <h1>Welcome to Nuxt 3</h1>
    <p>This is your homepage!</p>
  </div>

  <hr />

  <div>
    <h1>{{ message }}</h1>
    <input v-model="message" placeholder="Type something" />
  </div>

  <hr />

  <div style="margin-top: 15px;">
    <button @click="showMessage">Click Me</button>
    <button @click="clearMessage">Clear Message</button>
    <button :disabled="isDisabled">{{ buttonText }}</button>
    <button @click="sayHello('User')">Say Hello</button>

    <p>{{ alertMessage }}</p>
  </div>

  <hr />

  <div>
    <input v-model="number" type="number" placeholder="Enter a number" />
    <p>Square: {{ square }}</p>
  </div>

  <hr />

  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>

  <hr />

  <p v-if="isVisible">This text is visible.</p>
  <button @click="toggleVisibility">Toggle Visibility</button>


  <hr />

  <form @submit.prevent="submitForm">
    <input v-model="username" placeholder="Enter username" />
    <button type="submit">Submit</button>
  </form>
  <p>Submitted Username: {{ submittedUsername }}</p>

  <hr />

  <h1>Shared Counter: {{ counter }}</h1>


  <hr />

  <h1>Pinia Counter: {{ counter2.count }}</h1>


  <h1>{{ data?.title }}</h1>
  <p>{{ data?.body }}</p>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCounterStore } from '~/store/counter';

// Create a reactive variable
const message = ref<string>('Hello from TypeScript!');


const alertMessage = ref<string>(''); // Reactive variable for messages

// Function to handle button click
const showMessage = () => {
  alertMessage.value = 'Button was clicked!';
};

const clearMessage = () => {
  alertMessage.value = '';
};

const sayHello = (name: string) => {
  alert(`Hello, ${name}!`);
}

const isDisabled = ref<boolean>(true); // Reactive variable for button state
const buttonText = ref<string>('Button Disabled');

// Enable the button after 3 seconds
setTimeout(() => {
  isDisabled.value = false;
  buttonText.value = 'Button Enabled';
}, 3000);


const number = ref<number>(0);

// Computed property to calculate the square
const square = computed(() => number.value * number.value);


const items = ref<string[]>(['Apple', 'Banana', 'Cherry']);

const isVisible = ref<boolean>(true);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};


const username = ref<string>('');
const submittedUsername = ref<string>('');

const submitForm = () => {
  submittedUsername.value = username.value;
};

const counter = useState<number>('counter');

const counter2 = useCounterStore();


const { data } = await useFetch('/api/posts');

const nuxtApp = useNuxtApp();
console.log('Nuxt App:', nuxtApp);

onBeforeRouteLeave((to, from, next) => {
  if (confirm('Are you sure you want to leave?')) {
    next();
  } else {
    next(false);
  }
});

</script>
