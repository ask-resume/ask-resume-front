import styles from './index.module.scss';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import { TFunction } from 'next-i18next';

interface TitleProps {
  t: TFunction;
  isMobile: boolean;
}

const Title = ({ t, isMobile }: TitleProps) => {
  return (
    <div className={styles._wrapper}>
      <div className={styles._title}>
        <Text variant="h1" weight="bold" size={isMobile ? 'xxx_large' : 'xxxx_large'}>
          Ask
        </Text>
        <Text
          variant="p"
          weight="bold"
          size={isMobile ? 'xxx_large' : 'xxxx_large'}
          textColor={ColorMap.blue_6}
        >
          Resume
        </Text>
      </div>
      <Text weight="medium" size={isMobile ? 'small' : 'x_large'}>
        {t('sub_title')}
      </Text>
    </div>
  );
};

export default Title;
