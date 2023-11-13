import type { Meta, StoryObj } from '@storybook/react'
import { ArticleImageBlockComponent } from './article-image-block-component'



const meta: Meta<typeof ArticleImageBlockComponent> = {
  component: ArticleImageBlockComponent,
  title: 'entities/article-image-block-component',
}

export default meta
type Story = StoryObj<typeof ArticleImageBlockComponent>

export const Basic: Story = {}
