import React, { ErrorInfo, Suspense } from 'react'
import { PageError } from '@/widgets/page-error'
import { PageLoader } from '@/widgets/page-loader'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  constructor(props: ErrorBoundaryProps) {
    super(props)

    // eslint-disable-next-line react/state-in-constructor
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Suspense fallback={<PageLoader />}>
          <PageError />
        </Suspense>
      )
    }

    return children
  }
}
