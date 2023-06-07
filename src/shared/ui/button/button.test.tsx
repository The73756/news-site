import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('button', () => {
  test('with only button', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('button with cva params', () => {
    render(
      <Button shape="rounded" size="large">
        Test
      </Button>
    )
    expect(screen.getByText('Test')).toHaveClass('btn-circle btn-xl text-xl')
  })
})
