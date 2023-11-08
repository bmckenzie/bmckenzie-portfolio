<template>
  <div>
  <label v-uni-for="'input_id'">{{ label }}</label>
  <input type="text" v-uni-id="'input_id'" class="input_class" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}

const props = withDefaults(defineProps<Props>(), { label: "" });
</script>

<style scoped>

.input_class {
  border-radius: 10px;
  box-shadow: 3px 3px #121212;
}

label {
  font-family: 'Source Code Pro';
  margin-right: 5px;
}

</style>