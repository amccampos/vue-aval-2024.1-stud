import { Meta, StoryObj } from "@storybook/vue3"
import Team from "../components/Team.vue"


const meta = {
  title: 'Lib/Team',
  component: Team
} satisfies Meta<typeof Team>

type Story = StoryObj<typeof meta>

export default meta

export const Flamengo: Story = {
  args: {
    id: 'fla'
  }
}

export const BandeiraAEsquerda: Story = {
  args: {
    id: 'fla',
    flag: 'left'
  }
}

export const BandeiraADireita: Story = {
  args: {
    id: 'fla',
    flag: 'right'
  }
}