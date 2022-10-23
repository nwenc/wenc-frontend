import YiYan from "../../src/components/YiYan.vue"
import type { YiYanProps } from "../../src/components/YiYan.vue"
import type { Meta, Story } from "@storybook/vue3"

export default {
  title: "Components/YiYan",
  component: YiYan,
} as Meta<typeof YiYan>

const Template: Story<YiYanProps> = (args: YiYanProps) => ({
  components: { YiYan },
  setup() {
    return { args }
  },
  template: '<YiYan v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  content: "人间忽晚，山河已秋。",
  source: "《人间忽晚》",
}
