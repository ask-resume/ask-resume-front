import React, { ReactNode } from 'react';

export interface Props {
  isRefresh?: boolean;
  fallback: React.ElementType;
  message?: string;
  onReset?: () => void;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  info: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  initialState: State = {
    hasError: false,
    info: null,
  };

  constructor(props: Props) {
    super(props);
    this.state = this.initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, info: error };
  }

  onResetErrorBoundary = () => {
    const { onReset } = this.props;
    onReset == null ? void 0 : onReset();
    this.reset();
  };

  reset() {
    this.setState(this.initialState);
  }

  render() {
    const { hasError, info } = this.state;
    const { children, message, isRefresh } = this.props;

    if (hasError) {
      const props = {
        error: info,
        onResetErrorBoundary: this.onResetErrorBoundary,
      };

      const FallbackComponent = this.props.fallback;
      return (
        <FallbackComponent
          isRefresh={isRefresh}
          onRefresh={this.reset}
          onReset={props.onResetErrorBoundary}
          message={message}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
