import { Meta, StoryObj } from "@storybook/vue3"
import Rounds from "../components/Rounds.vue"
import { provide } from "vue"

import matches from "../assets/matches.json"

const meta = {
  title: 'Lib/Rounds',
  component: Rounds,
  render: args => ({
    components: { Rounds },
    setup() {
      provide('matches', matches)
      return { args }
    },
    template: '<Rounds />'
  })
} satisfies Meta<typeof Rounds>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}