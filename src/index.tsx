import '@/shared/config/i18n'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '@/app/providers/error-boundary'
import { ThemeProvider } from '@/app/providers/theme-provider'
import { App } from './app/app'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,

  document.querySelector('#root')
)
