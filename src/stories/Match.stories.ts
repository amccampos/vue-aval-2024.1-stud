import { Meta, StoryObj } from "@storybook/vue3"
import Match from "../components/Match.vue"
import { provide } from "vue"

import matches from "../assets/matches.json"

const meta = {
  title: 'Lib/Match',
  component: Match,
  render: args => ({
    components: { Match },
    setup() {
      provide('matches', matches)
      return { args }
    },
    template: '<Match :teamA="args.teamA" :teamB="args.teamB" />'
  })
} satisfies Meta<typeof Match>

type Story = StoryObj<typeof meta>

export default meta

export const IntBah: Story = {
  args: {
    teamA: "int",
    teamB: "bah"
  }
}

export const FlaFlu: Story = {
  args: {
    teamA: "fla",
    teamB: "flu"
  }
}