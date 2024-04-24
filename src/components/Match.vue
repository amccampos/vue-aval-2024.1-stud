<template>
  <div v-if="match" class="flex align-center m-3">
    <Team :id="teamA" flag="right" />
    <input type="text" class="mx-5 small t-center b-none b-bottom" maxlength="2"
      :value="match.score?.[0]"
      @change="updateScore(0, $event)"
    />
    X
    <input type="text" class="mx-5 small t-center b-none b-bottom" maxlength="2"
      :value="match.score?.[1]"
      @change="updateScore(1, $event)"
    />
    <Team :id="teamB" flag="left" />
  </div>
  <div v-else>
    Partida inválida
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue"
  import Team from "./Team.vue"

  const match = computed(() => matches?.find(match => match.teams[0] === props.teamA && match.teams[1] === props.teamB))

  function updateScore(index: number, event: Event) {
    if (match.value) {
      const target = event.target as HTMLInputElement
      match.value.score ??= [0, 0]
      match.value.score[index] = parseInt(target.value)
    }
  }
</script>