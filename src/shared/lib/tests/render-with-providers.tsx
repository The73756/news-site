import { render, RenderOptions } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from '@/shared/config/i18n/i18nForTests'

export interface RenderWithProvidersProps {
  route?: string
}

export const renderWithProviders = (
  component: ReactNode,
  options: RenderWithProvidersProps = {},
  renderOptions?: RenderOptions
) => {
  const { route = '/' } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>,
    renderOptions
  )
}
