<template>
  <div>
    <NuxtLayout>
      <TheHeader />
      <NuxtPage />
      <TheFooter />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/main/organisms/TheHeader.vue';
import TheFooter from './components/main/organisms/TheFooter.vue';
</script>

