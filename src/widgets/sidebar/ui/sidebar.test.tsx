import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { renderWithTranslation } from '@/shared/lib/tests'
import { Sidebar } from './sidebar'

describe('sidebar', () => {
  test('with only sidebar', () => {
    renderWithTranslation(<Sidebar />, { wrapper: BrowserRouter })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('sidebar toggle', () => {
    renderWithTranslation(<Sidebar />, { wrapper: BrowserRouter })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('w-[var(--sidebar-w-collapsed)]')
  })
})
