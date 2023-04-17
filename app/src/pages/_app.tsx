import type { AppProps } from 'next/app';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from 'next-i18next';

import Layout from '@/layout';
import '@/index.scss';
import '@/reset.scss';

// TODO: Add a function to measure the number of views with Google Analytics
const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
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
