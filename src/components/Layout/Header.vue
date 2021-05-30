<template>
  <div class="header">
    <h1>Scroll-Loading</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  background-color: rgb(76, 85, 165);
  position: fixed;
  left: 0;
  right: 0;
  color: #fff;
  font-weight: bold;
}
</style>