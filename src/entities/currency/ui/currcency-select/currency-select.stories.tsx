import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from '@/entities/currency'
import { CurrencySelect } from './currency-select'

const meta: Meta<typeof CurrencySelect> = {
  component: CurrencySelect,
  title: 'entities/currency-select',
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs<typeof ctx.args>()

      const onChange = (value: Currency) => {
        ctx.args.onChange(value)

        setArgs({ value })
      }

      return <Story args={{ ...ctx.args, onChange }} />
    },
  ],
}

export default meta
type Story = StoryObj<typeof CurrencySelect>

export const Basic: Story = {
  args: {
    value: Currency.EUR,
  },
}
