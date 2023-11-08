<template>
  <div>
<h1>Gallery of Projects</h1>
<div class="container">
<PortfolioCard v-for="(demoProject, index) in demoProjectList" :demo="demoProject" :key="index"></PortfolioCard>
</div>
  </div>
</template>

<script setup lang="ts">
import PortfolioCard from "~/components/main/organisms/PortfolioCard.vue";

</script>

<style scoped>
h1 {
  text-align: center;
}

.container {
  display: grid;
  place-content: space-around;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>