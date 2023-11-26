import axios from 'axios'
import { TestAsyncThunk } from '@/shared/lib/tests'
import { fetchArticleById } from './fetch-article-by-id'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
const data = {
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
  type: ['IT'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
    {
      id: '3',
      type: 'CODE',
      language: 'javascript',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
  ],
}

describe('fetch-article-by-id', () => {
  test('successful fetch data', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data }))

    const thunk = new TestAsyncThunk((num: string) => fetchArticleById(num))
    const result = await thunk.callThunk('1')

    expect(mockedAxios.get).toHaveBeenCalled()

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error fetch data', async () => {
    mockedAxios.get.mockReturnValue(Promise.reject({ status: 403 }))

    const thunk = new TestAsyncThunk((num: string) => fetchArticleById(num))
    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
