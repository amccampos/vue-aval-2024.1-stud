<template>
  <div>
    <h2 class="flex justify-center">
      <button class="mx-10 bg-none b-none pointer"> &lt; </button>
      Rodada
      <button class="mx-10 bg-none b-none pointer"> &gt; </button>
    </h2>
    <Round />
  </div>
</template>

<script setup lang="ts">
  import Round from './Round.vue'

</script>