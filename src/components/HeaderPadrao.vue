<script setup lang="ts">
import { cnpj } from 'cpf-cnpj-validator';
import { ref } from 'vue';

const cpnj_ = ref(`Gerar CNPJ`)
function gerar() {
  cpnj_.value = cnpj.generate()
}

defineProps<{ textoHeader: string, textoFooter: string }>()
</script>

<template>
  <header class="bg-green-700 h-10 w-full text-lg flex items-center justify-between">
    <div> {{ textoHeader }}</div>
    <button class="text-white h-8 bg-green-900 p-1 w-40" @click="gerar"> {{ cpnj_ }}</button>
  </header>
  <slot></slot>
  <footer class="bg-green-700 h-10 w-full">
    {{ textoFooter }}
  </footer>
</template>

<style scoped></style>
