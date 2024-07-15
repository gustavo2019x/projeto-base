<script setup lang="ts">
import { defineProps, } from 'vue';


const props = defineProps({
  textoHeader: String,
  textoFooter: String
});

function gerar() {

}

</script>

<template>
  <div>
    <header class="bg-green-700 h-10 w-full text-lg flex items-center justify-between">
      <div> {{ textoHeader }}</div>
      <button class="text-white h-8 bg-green-900 p-1 w-40" @click="gerar"> aaa</button>
    </header>

    <footer class="bg-green-700 h-10 w-full">
      {{ textoFooter }}
    </footer>
  </div>

</template>

<style scoped></style>
