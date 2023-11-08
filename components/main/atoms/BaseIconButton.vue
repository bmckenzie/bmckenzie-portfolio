<template>
  <div>
    <button><font-awesome-icon :icon="props.icon" size="xl"></font-awesome-icon></button>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

interface Props {
  icon: string
  onClick?: {
    type: Function
  }
};

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
button {
  color: #121212;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #121212;
  box-shadow: 3px 3px #121212;
  cursor: pointer;
  margin: 35px 0;
  background: #FAFAFA;
}

button:hover {
  background-color: deepskyblue;
}

button:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}

</style>