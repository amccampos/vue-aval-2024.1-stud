<template>
  <div class="flex col align-center">
    
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import matches from '../assets/matches.json'

  const roundMatches = computed(() => matches.filter(match => match.round === props.num))
</script>