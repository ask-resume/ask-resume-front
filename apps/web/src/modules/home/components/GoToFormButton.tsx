import Link from 'next/link';
import { TFunction } from 'next-i18next';

import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import styles from './index.module.scss';

interface GoToFormButtonProps {
  t: TFunction;
  isMobile: boolean;
}

const GoToFormButton = ({ t, isMobile }: GoToFormButtonProps) => {
  const labelTailingIcon = isMobile ? <></> : <Icon.AirPlane color={ColorMap.blue_5} />;

  return (
    <Link href={{ pathname: '/form', query: { type: 'user-info' } }}>
      <Button
        className={styles._button}
        size={isMobile ? 'xxs' : 'lg'}
        buttonColor="blue"
        variant="ghost"
        fullWidth
        rounded
        label={{
          labelTailingIcon,
          labelText: t('button_label') ?? '',
        }}
      />
    </Link>
  );
};

export default GoToFormButton;
