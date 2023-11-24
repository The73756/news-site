import { render, screen } from '@testing-library/react'
import { Header, HeaderLevelClasses, HeaderWeightClasses } from './header'

describe('header', () => {
  test('header h1 base', () => {
    render(<Header level="h1">Test</Header>)

    expect(screen.getByText('Test')).toHaveClass(
      `${HeaderLevelClasses.H1} ${HeaderWeightClasses.BOLD}`
    )
  })

  test('header h2 with custom weight', () => {
    render(
      <Header level="h2" weight="normal">
        Test
      </Header>
    )

    expect(screen.getByText('Test')).toHaveClass(
      `${HeaderLevelClasses.H2} ${HeaderWeightClasses.NORMAL}`
    )
  })

  test('header h2 with custom style', () => {
    render(
      <Header level="h2" custom={true} className="text-4xl font-normal text-accent underline">
        Test
      </Header>
    )

    expect(screen.getByText('Test')).toHaveClass('text-4xl font-normal text-accent underline')
    expect(screen.getByText('Test')).not.toHaveClass(
      `${HeaderLevelClasses.H2} ${HeaderWeightClasses.BOLD}`
    )
  })
})
