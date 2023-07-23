import Image from 'next/image';
import styles from './index.module.scss';
import { TFunction, useTranslation } from 'next-i18next';
import { LoginPageTranslateNamespaces } from 'modules/login/constants';

export type SocialLoginProvider = 'google' | 'linked-in';

interface SocialLoginButtonProps {
  provider: SocialLoginProvider;
}

export const SocialLoginButton = ({ provider }: SocialLoginButtonProps) => {
  const { t } = useTranslation(LoginPageTranslateNamespaces);

  const href = `http://localhost:8080/api/oauth/${provider}/login`;

  const providerInfo = {
    google: {
      icon: '/images/icons/google-icon.png',
      label: t('common:social_login.google'),
    },
    'linked-in': {
      icon: '/images/icons/linked-in-icon.jpeg',
      label: t('common:social_login.linked_in'),
    },
  };

  const { icon, label } = providerInfo[provider];

  return (
    <a className={styles._SOCIAL_LOGIN_BUTTON} href={href}>
      <span>{<Image src={icon} alt="" width="24" height="24" />}</span>
      <span>{label}</span>
    </a>
  );
};
