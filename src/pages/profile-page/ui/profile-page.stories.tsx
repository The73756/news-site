import type { Meta, StoryObj } from '@storybook/react'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency/model'
import { ProfileSchema } from '@/entities/profile'
import AvatarImage from '@/shared/assets/img/avatar.png'
import { StoreDecorator } from '@/shared/config/storybook'
import ProfilePage from './profile-page'

const profileData: ProfileSchema = {
  data: {
    first: 'The',
    lastname: '73756',
    age: 10,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImage,
  },
  form: {
    first: 'The',
    lastname: '73756',
    age: 10,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImage,
  },
}

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  title: 'pages/profile-page',
  parameters: {
    reactRouter: {
      routePath: '/:id',
      routeParams: { id: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProfilePage>

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        ...profileData,
        isLoading: false,
        readonly: true,
      },
    }),
  ],
}

export const Editing: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        ...profileData,
        isLoading: false,
        readonly: false,
      },
    }),
  ],
}

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        ...profileData,
        isLoading: true,
        readonly: true,
      },
    }),
  ],
}

export const WithError: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        ...profileData,
        isLoading: false,
        readonly: true,
        error: 'Error!',
      },
    }),
  ],
}

export const NotFound: Story = {
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
  decorators: [
    StoreDecorator({
      profile: {
        ...profileData,
        isLoading: false,
        readonly: true,
        error: 'Error!',
      },
    }),
  ],
}
