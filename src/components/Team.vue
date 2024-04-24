<template>
  <div class="flex align-center w-fixed" :style="{ flexDirection: flag === 'left' ? 'row' : 'row-reverse'}">
    <img v-if="flag" :src="flagSrc" width="20" height="20" class="mx-5" />
    <span>{{ team?.name }}</span>
  </div>

</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import teams from '../assets/teams.json'

  /** Tipos com os possíveis identificadores das equipes. */
  export type TeamId = 'cap' | 'acg' | 'cam' | 'bah' | 'bot' | 'rbb' | 'cor' | 'cri' | 'cru' | 'cui' | 'fla' | 'flu' | 'for' | 'gre' | 'int' | 'juv' | 'pal' | 'sao' | 'vas' | 'vit'

  /** Propriedades que o componente Team pode receber. */
  export type TeamProps = {  
    id: TeamId // identificador da equipe
    flag?: 'left' | 'right' // indicador se a bandeira deve ser apresentada à direita ou à esquerda
  }

  const props = defineProps<TeamProps>()
  const team = computed(() => teams.find(t => t.id === props.id))
  const flagSrc = computed(() => `/flags/${ team.value?.flag }`)
</script>
