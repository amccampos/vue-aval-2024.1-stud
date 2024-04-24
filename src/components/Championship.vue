<template>
  <h1 class="header">Brasileirão</h1>
  <div class="championship">
    <Rounds :max="maxRounds" />
    <Ranking />
  </div>
</template>

<script setup lang="ts">
  import { reactive } from "vue"
  import Ranking from "./Ranking.vue"
  import Rounds from "./Rounds.vue"

  import matchesJSON from '../assets/matches.json'

  const maxRounds = matchesJSON.reduce((prev, curr) => curr.round > prev ? curr.round : prev, 0)

  const matches = reactive(matchesJSON)

</script>

<style scoped>
.header {
  text-align: center;
  margin: 0;
}
.championship {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>