<template>
    <div  >
        <header>
            <h1>My Website</h1>
            <div>
                <nav>
                    <NuxtLink to="/">
                        <button>Go to Home</button>
                    </NuxtLink>
                    <NuxtLink to="/about">
                        <button>Go to About</button>
                    </NuxtLink>
                    <NuxtLink :to="`/profile/${userId}`">
                        <button>Go to User Profile</button>
                    </NuxtLink>
                </nav>
            </div>

        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>&copy; 2024 My Website</p>
        </footer>
    </div>
</template>




<script setup>
const userId = 123; // Example user ID
</script>