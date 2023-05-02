import { AxiosError } from 'axios';
import React from 'react';

import pageStyles from '../../../page.module.scss';
import Text from 'shared-ui/src/components/Text';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import { getSize } from 'modules/result/lib';

interface CustomError {
  errorCode: string;
  errorMessage: string;
}

// A component that renders error codes and messages sent by the server
const DefaultErrorFallback = ({ error }) => {
  const { errorCode, errorMessage } = getErrorInfo(error);
  const isMobile = useIsMobile();
  const size = getSize(isMobile);

  return (
    <div className={pageStyles._loading}>
      <div className={pageStyles.content}>
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
    </div>
  );
};

const getErrorInfo = (error: AxiosError) => {
  const errorCode = (error?.response?.data as CustomError)?.errorCode ?? 'Uncatched Error';
  const errorMessage = (error?.response?.data as CustomError)?.errorMessage ?? 'Something is Error';
  return { errorCode, errorMessage };
};

export default DefaultErrorFallback;
