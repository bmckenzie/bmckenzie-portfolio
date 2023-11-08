<template>
  <div>
    <button><slot>Button</slot></button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: string
  onClick?: {
    type: Function
  }
}

const props = withDefaults(defineProps<Props>(), { type: "primary" });
</script>

<style scoped>
button {
  font-family: "Source Code Pro", monospace;
  font-size: 1.5rem;
  color: #121212;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #121212;
  background: #fafafa;
  box-shadow: 3px 3px #121212;
  cursor: pointer;
  margin: 35px 0;
}

button:hover {
  background-color: deepskyblue;
}


button:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}
</style>
