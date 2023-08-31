import React from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from 'next-i18next';
import { Toaster } from 'react-hot-toast';

import Layout from 'modules/layout/components';
import 'shared-ui/src/index.scss';
import 'shared-ui/src/reset.scss';
import 'shared-ui/src/darkmode.scss';
import ErrorBoundary from 'common/components/Error/ErrorBoundary';

// TODO: Add a function to measure the number of views with Google Analytics
const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydrateState}>
        <RecoilRoot>
          <ErrorBoundary>
            <Layout>
              <Component {...pageProps} />
            </Layout>

            <Toaster />
          </ErrorBoundary>
        </RecoilRoot>
      </Hydrate>
      {/* {typeof window !== 'undefined' && window.location.hostname === 'localhost' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )} */}
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
