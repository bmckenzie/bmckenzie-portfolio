<template>
  <div>
    <div class="nav">
      <h1>Ben McKenzie</h1>
      <ul>
        <li><NuxtLink to="/" class="test">About</NuxtLink></li>
        <li><NuxtLink to="/gallery" class="test">Gallery</NuxtLink></li>
        <li><NuxtLink to="/contact" class="test">Contact</NuxtLink></li>
      </ul>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav {
  display: flex;
  justify-content: left;
  align-items: baseline;
  gap: 10px;
  background: white;
}

h1 {
  font-family: "Alata";
  margin: 0;
  padding: 10px 12px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  font-family: "Alata";
  display: inline-block;
  padding: 10px 12px;
}

.test {
  display: block;
  color: black;
  text-align: baseline;
  font-size: 18pt;
  padding: 10px 12px;
  text-decoration: none;
}

.test:hover {
  transition-timing-function: ease-out;
  transition-duration: 0.25s;
  opacity: 0.4;
  color: deepskyblue; 
}

</style>
