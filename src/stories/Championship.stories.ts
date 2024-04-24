import { Meta, StoryObj } from "@storybook/vue3"
import Championship from "../components/Championship.vue"


const meta = {
  title: 'Lib/Championship',
  component: Championship
} satisfies Meta<typeof Championship>

type Story = StoryObj<typeof meta>

export default meta

export const Brasileirao: Story = {}