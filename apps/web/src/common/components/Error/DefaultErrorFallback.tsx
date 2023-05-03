import { AxiosError } from 'axios';
import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import Text from 'shared-ui/src/components/Text';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import { getSize } from 'modules/result/lib';
import Button from 'shared-ui/src/components/Button';

interface DefaultErrorFallbackProps {
  error: unknown;
  refetch: () => void;
}

// A component that renders error codes and messages sent by the server
const DefaultErrorFallback = ({ error, refetch }: DefaultErrorFallbackProps) => {
  const { t } = useTranslation('error-page');
  const isMobile = useIsMobile();
  const size = getSize(isMobile);

  const { errorCode, errorMessage, isServerError } = getErrorInfo(error as AxiosError);

  return (
    <div className={styles._error_fallback}>
      <div className={styles.content}>
        <Text size={size.title} weight="bold" textColor={ColorMap.gray_7}>
          {errorCode}
        </Text>
        <Text
          size={size.description}
          variant="p"
          lineHeight="narrow"
          align="center"
          textColor={ColorMap.gray_6}
        >
          {errorMessage}
        </Text>
      </div>

      {/* Create a retry button to try again in case of a GPT server error */}
      {isServerError && (
        <Button
          className={styles.retry_button}
          rounded
          size={isMobile ? 'md' : 'lg'}
          buttonColor="blue"
          label={{ labelText: t('retry') }}
          onClick={refetch}
          variant="ghost"
        />
      )}
    </div>
  );
};

interface CustomError {
  errorCode: string;
  errorMessage: string;
  isServerError?: boolean;
}

const getErrorInfo = (error: AxiosError) => {
  const errorCode = (error?.response?.data as CustomError)?.errorCode ?? 'Uncatched Error';
  const errorMessage = (error?.response?.data as CustomError)?.errorMessage ?? 'Something is Error';
  const isServerError = error?.response?.status === 500;
  return { errorCode, errorMessage, isServerError };
};

export default DefaultErrorFallback;
