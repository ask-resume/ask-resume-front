import React from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from 'next-i18next';

import Layout from 'modules/layout/components';
import 'shared-ui/src/index.scss';
import 'shared-ui/src/reset.scss';
import 'shared-ui/src/darkmode.scss';

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Hydrate>
      {typeof window !== 'undefined' && window.location.hostname === 'localhost' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
