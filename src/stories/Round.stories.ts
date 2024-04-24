import { Meta, StoryObj } from "@storybook/vue3"
import Round from "../components/Round.vue"
import { provide } from "vue"

import matches from "../assets/matches.json"

const meta = {
  title: 'Lib/Round',
  component: Round,
  render: args => ({
    components: { Round },
    setup() {
      provide('matches', matches)
      return { args }
    },
    template: '<Round :num="args.num" />'
  })
} satisfies Meta<typeof Round>

type Story = StoryObj<typeof meta>

export default meta

export const Round1: Story = {
  args: {
    num: 1
  }
}

export const Round2: Story = {
  args: {
    num: 2
  }
}