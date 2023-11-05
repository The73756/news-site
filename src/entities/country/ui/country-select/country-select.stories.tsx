import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { Country } from '../../model'
import { CountrySelect } from './country-select'

const meta: Meta<typeof CountrySelect> = {
  component: CountrySelect,
  title: 'entities/country-select',
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs<typeof ctx.args>()

      const onChange = (value: Country) => {
        ctx.args.onChange?.(value)

        setArgs({ value })
      }

      return <Story args={{ ...ctx.args, onChange }} />
    },
  ],
}

export default meta
type Story = StoryObj<typeof CountrySelect>

export const Basic: Story = {
  args: {
    value: Country.RUSSIA,
  },
}
