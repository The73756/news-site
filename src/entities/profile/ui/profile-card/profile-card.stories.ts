import type { Meta, StoryObj } from '@storybook/react'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { ProfileCard } from './profile-card'

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  title: 'entities/profile-card',
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const Basic: Story = {
  args: {
    data: {
      username: 'admin',
      lastname: '73756',
      first: 'the',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      age: 10,
      city: 'Москва',
    },
    readonly: true,
    isLoading: false,
  },
}

export const Editable: Story = {
  args: {
    data: {
      username: 'admin',
      lastname: '73756',
      first: 'the',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      age: 10,
      city: 'Москва',
    },
    readonly: false,
    isLoading: false,
  },
}

export const Loading: Story = {
  args: {
    data: {
      username: 'admin',
      lastname: '73756',
      first: 'the',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      age: 10,
      city: 'Москва',
    },
    readonly: false,
    isLoading: true,
  },
}

export const WithError: Story = {
  args: {
    error: 'Error!',
  },
}
