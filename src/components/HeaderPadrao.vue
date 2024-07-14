<script setup lang="ts">
 import { defineProps } from 'vue';
defineProps<{ textoHeader: string, textoFooter: string }>()
</script>

<template>
  <header class="bg-green-700 h-10 w-full text-lg flex items-center justify-between">
    <div> {{ textoHeader }}</div>

    <button class="text-white h-8 bg-green-900 p-1 w-40" ></button>
  </header>
  <slot></slot>
  <footer class="bg-green-700 h-10 w-full">
    {{ textoFooter }}
  </footer>
</template>

<style scoped></style>
