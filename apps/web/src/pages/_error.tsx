import { NextPageContext } from 'next';
import styles from '../page.module.scss';
import Text from 'shared-ui/src/components/Text';
import Divider from 'shared-ui/src/components/Divider';
import { ColorMap } from 'shared-ui/src/config/colorMap';

const Error = ({ statusCode = 500, errorMessage = 'Internal Server Error.' }) => {
  return (
    <div className={styles._ERROR_PAGE_}>
      <div className={styles._wrapper}>
        <div className={styles.title}>
          <Text variant="h1" size="xxxx_large" weight="bold">
            {statusCode}
          </Text>
        </div>

        <Divider />

        <div className={styles.explain}>
          <Text align="center" textColor={ColorMap.gray_6} size="small" lineHeight="wide">
            {errorMessage}
          </Text>
        </div>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  let statusCode: number | undefined;
  let errorMessage: string | undefined;

  if (res) {
    statusCode = res.statusCode;
    errorMessage = res.statusMessage;
  } else if (err) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }

  return { statusCode, errorMessage };
};

export default Error;
