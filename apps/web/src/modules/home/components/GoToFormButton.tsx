import Link from 'next/link';
import { TFunction } from 'next-i18next';

import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import styles from './index.module.scss';

interface GoToFormButtonProps {
  t: TFunction;
}

const GoToFormButton = ({ t }: GoToFormButtonProps) => {
  return (
    <Link href="/form/user-info" prefetch>
      <Button
        className={styles._button}
        size="lg"
        buttonColor="blue"
        variant="ghost"
        fullWidth
        rounded
        label={{
          labelTailingIcon: <Icon.AirPlane color={ColorMap.blue_5} />,
          labelText: t('button_label') ?? '',
        }}
      />
    </Link>
  );
};

export default GoToFormButton;
