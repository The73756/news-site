import '@/shared/config/i18n'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/theme-provider'
import { App } from './app/app'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.querySelector('#root')
)
