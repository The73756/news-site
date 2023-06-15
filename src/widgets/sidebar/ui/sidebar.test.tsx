import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '@/shared/lib/tests'
import { Sidebar } from './sidebar'

describe('sidebar', () => {
  test('with only sidebar', () => {
    renderWithProviders(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('sidebar toggle', () => {
    renderWithProviders(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('w-[var(--sidebar-w-collapsed)]')
  })
})
