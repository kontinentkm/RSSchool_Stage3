import React, { Component, ReactNode } from 'react';
import './ErrorBoundary.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error);
    console.error(errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
          {this.state.error && <p>Error: {this.state.error.message}</p>}
          <button className="fix-button">Fix the error</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
