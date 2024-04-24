import { Meta, StoryObj } from "@storybook/vue3"
import Ranking from "../components/Ranking.vue"
import { provide } from "vue"

import matches from "../assets/matches.json"

const meta = {
  title: 'Lib/Ranking',
  component: Ranking,
  render: args => ({
    components: { Ranking },
    setup() {
      provide('matches', matches)
      return { args }
    },
    template: '<Ranking />'
  })
} satisfies Meta<typeof Ranking>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}