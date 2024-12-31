<template>
  <div>
    <h1>About Us</h1>
    <p>This is all possible scnearios for Vue</p>
  </div>


  <div>
    <h2>1. Data Binding</h2>
    <p>One-Way Data Binding</p>

    <p>{{ message }}</p>

    <p>Two-Way Data Binding</p>

    <input v-model="username" placeholder="Enter username" />
    <p>Typed: {{ username }}</p>
  </div>

  <hr>

  <div>
    <h2>2. Event Handling</h2>
    <button @click="handleClick">Click Me</button>

    <input @input="onInputChange" placeholder="Type something" />


    Form Submission
    <form @submit.prevent="submitForm">
      <input v-model="username" placeholder="Username" />
      <button type="submit">Submit</button>
    </form>
  </div>

  <hr>

  <div>
    <h2>Conditonals</h2>
    <p v-if="isLoggedIn">Welcome back!</p>
    <p v-else>Please log in.</p>

    <button @click="isLoggedIn = !isLoggedIn">Toggle</button>
  </div>

  <hr>

  <div>
    <h2>Loops</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>

    <ul>
      <li v-for="(value, key) in user" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>

  <hr>

  <div>
    <h2>Attribute Binding</h2>
    <img :src="imageUrl" :alt="imageAlt" />
    <p>Class and Style Binding</p>
    <p :class="textClass" :style="textStyle">Styled Text</p>

  </div>
  <hr>

  <div>
    <h2>6. Computed Properties</h2>
    <p>Original: {{ number }}</p>
    <p>Squared: {{ squared }}</p>
  </div>

  <div>
    <h2>7. Watchers</h2>
    <input v-model="username" placeholder="Username" />
  </div>

  <div>
    <h2>8. Dynamic Components</h2>

    <component :is="currentComponent" />

  </div>


  <div>
    <h2>9. Slots</h2>
    <ComponentB>
      <h1>Header Slot</h1>
      <p>Content Slot</p>
    </ComponentB>
  </div>
  <div>

    <h2>10. Events Between Components
    </h2>
    <ComponentA @customEvent="handleEvent" />

  </div>

  <div>

    <h2>11. Props
    </h2>
    <ComponentA :message="parentMessage"  @customEvent="handleEvent" />

  </div>

  <div>
    <h2>12. Ref for DOM Elements</h2>
    <input ref="inputElement" placeholder="Focus me on click" />
    <button @click="focusInput">Focus Input</button>
  </div>

  <div>
    <h2>13. Async Data Fetching</h2>
    <p v-if="loading">Loading...</p>
    <p v-else>{{ data }}</p>
  </div>
  
  <div>
    <h1>
      Using useState for Global State Management
    </h1>
    <h2>Counter: {{ counter }}</h2>
    <button @click="increment">Increment</button>
  </div>

  <div v-if="data">
    <h1>{{ data }}</h1>
  </div>
  <p v-else>Loading...</p>

  <div>
    <h2> Using useAsyncData for Pre-Fetching</h2>

  </div>


  <div>
    <h1>Counter: {{ counter2.count }}</h1>
    <button @click="counter2.increment">Increment</button>
  </div>

</template>


<script setup lang="ts">
import { useCounterStore } from '~/store/counter';



const message = ref("Hello, Nuxt!");
const username = ref("");

const handleClick = () => {
  alert("Button clicked!");
};

const onInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  console.log("Input value:", input.value);
};

const submitForm = () => {
  console.log("Form submitted:", username.value);
};

const isLoggedIn = ref(false);

const items = ref(["Apple", "Banana", "Cherry"]);
const user = ref({ name: "John", age: 30, country: "USA" });

const imageUrl = ref("https://via.placeholder.com/150");
const imageAlt = ref("Placeholder Image");

const textClass = ref("text-primary");
const textStyle = ref({ color: "blue", fontSize: "20px" });

const number = ref(5);
const squared = computed(() => number.value ** 2);

watch(username, (newVal, oldVal) => {
  console.log(`Username changed from ${oldVal} to ${newVal}`);
});

const currentComponent = ref("ComponentA");

const handleEvent = (message: string) => {
  console.log(message);
};

const parentMessage = "Hello from parent!";

const inputElement = ref<HTMLInputElement>();

const focusInput = () => {
  inputElement.value?.focus();
};

const data1 = ref("");
const loading = ref(true);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const result = await response.json();
  data.value = result.title;
  loading.value = false;
});

const counter = useState<number>('counter', () => 0);

const increment = () => {
  counter.value++;
};

const { data, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/posts/1');

if (error.value) {
  console.error('Failed to fetch data:', error.value);
}


const counter2 = useCounterStore();

</script>