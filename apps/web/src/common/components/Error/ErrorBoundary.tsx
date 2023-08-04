import React from 'react';
import Router from 'next/router';

import { isInstanceOfAPIError } from 'modules/auth/CustomError';
import Page404 from 'pages/404';

type ErrorBoundaryProps = React.PropsWithChildren;

interface ErrorBoundaryState {
  error: Error | null;
}

const errorBoundaryState: ErrorBoundaryState = {
  error: null,
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = errorBoundaryState;
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return { error };
  }

  private resetState = () => {
    this.setState(errorBoundaryState);
  };

  private setError = (error: Error) => {
    console.error(error);

    this.setState({ error });
  };

  private handleError = (event: ErrorEvent) => {
    this.setError(event.error);
    event.preventDefault?.();
  };

  private handleRejectedPromise = (event: PromiseRejectionEvent) => {
    event?.promise?.catch?.(this.setError);
    event.preventDefault?.();
  };

  componentDidMount() {
    window.addEventListener('error', this.handleError);
    window.addEventListener('unhandledrejection', this.handleRejectedPromise);

    Router.events.on('routeChangeStart', this.resetState);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.handleError);
    window.removeEventListener('unhandledrejection', this.handleRejectedPromise);

    Router.events.off('routeChangeStart', this.resetState);
  }

  render() {
    const { error } = this.state;
    if (isInstanceOfAPIError(error)) {
      const { redirectUrl, notFound } = error;

      if (notFound) {
        return <Page404 />;
      }

      if (redirectUrl) {
        window.location.href = redirectUrl;
        return;
      }
    }

    return this.props.children;
  }
}
