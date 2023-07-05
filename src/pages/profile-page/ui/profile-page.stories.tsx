import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import { Country, Currency } from '@/shared/constants/common'
import ProfilePage from './profile-page'

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  title: 'pages/profile-page',
}

export default meta
type Story = StoryObj<typeof ProfilePage>

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        data: {
          first: 'The',
          lastname: '73756',
          age: 10,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
        },
        isLoading: false,
        readonly: true,
      },
    }),
  ],
}
