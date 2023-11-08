<template>
  <NuxtLink to="/demo/calculator">
  <div class="card">
    <img :src="props.demo.image" />
    <h1>{{ props.demo.title }}</h1>
    <p>{{ props.demo.description }}</p>
  </div>
</NuxtLink>

</template>

<script setup lang="ts">
interface Props {
  demo: { title: string; image: string; description: string, path: string };
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.card {
  display: flex;
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #121212;
  box-shadow: 3px 3px #121212;
  transition: 0.3s;
  width: 400px;
  height: 500px;
}

.card:hover {
  background-color: deepskyblue;
}

.card:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}

h1 {
  font-family: "Alata";
  text-align: center;
  
}

img {
  height: 300px;
  width: 200px;
}

p {
  font-family: "Source Code Pro";
  font-size: 1.25rem;
  text-align: center;
}

a {
  color: black;
  text-decoration: none;
}



</style>
