import type { Meta, StoryObj } from '@storybook/react'
import { Article, ArticleBlockType, ArticleType, ArticleView } from '@/entities/article/model'
import { ArticleList } from './article-list'

const meta: Meta<typeof ArticleList> = {
  component: ArticleList,
  title: 'entities/article-list',
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-[1520px]">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ArticleList>

const articles = new Array(10).fill(0).map((_, index) => ({
  id: index.toString(),
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
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка. JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.  Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью т',
      ],
    },
  ],
}))

export const Basic: Story = {
  args: {
    articles: articles as Article[],
    view: ArticleView.TILE,
  },
}

export const List: Story = {
  args: {
    articles: articles as Article[],
    view: ArticleView.LIST,
  },
}

export const TileLoading: Story = {
  args: {
    articles: articles as Article[],
    view: ArticleView.TILE,
    isLoading: true,
  },
}

export const ListLoading: Story = {
  args: {
    articles: articles as Article[],
    view: ArticleView.LIST,
    isLoading: true,
  },
}
