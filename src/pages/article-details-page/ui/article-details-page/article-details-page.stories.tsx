import type { Meta, StoryObj } from '@storybook/react'
import { Suspense } from 'react'
import { ArticleBlockType, ArticleType } from '@/entities/article/model'
import { StoreDecorator } from '@/shared/config/storybook'
import { PageLoader } from '@/widgets/page-loader'
import ArticleDetailsPage from './article-details-page'

const meta: Meta<typeof ArticleDetailsPage> = {
  component: ArticleDetailsPage,
  title: 'pages/article-details-page',
  parameters: {
    reactRouter: {
      routePath: '/:id',
      routeParams: { id: 1 },
    },
  },
  decorators: [
    (Story) => (
      <Suspense fallback={<PageLoader />}>
        <Story />
      </Suspense>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ArticleDetailsPage>

const article = {
  isLoading: false,
  data: {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: 1700977685870,
    user: {
      id: '1',
      username: 'The73756',
      avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
    },
    type: [ArticleType.IT],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        ],
      },
      {
        id: '4',
        type: ArticleBlockType.CODE,
        language: 'html',
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        ],
      },
    ],
  },
}

const comments = {
  ids: ['1', '2', '3'],
  entities: {
    '1': {
      id: '1',
      text: 'some comment',
      articleId: '1',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      },
    },
    '2': {
      id: '2',
      text: 'some comment 2',
      articleId: '1',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      },
    },
    '3': {
      id: '3',
      text: 'some comment 3',
      articleId: '1',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      },
    },
  },
}

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      articleDetails: article,
      articleDetailsComments: { ...comments, isLoading: false },
    }),
  ],
}

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      articleDetails: { ...article, isLoading: true },
      articleDetailsComments: { ...comments, isLoading: true },
    }),
  ],
}

export const Error: Story = {
  decorators: [
    StoreDecorator({
      articleDetails: { error: 'Error!' },
      articleDetailsComments: { ...comments, isLoading: false },
    }),
  ],
}

export const NoId: Story = {
  decorators: [StoreDecorator({})],
  parameters: {
    reactRouter: {
      routePath: '/',
      routeParams: {},
    },
  },
}
