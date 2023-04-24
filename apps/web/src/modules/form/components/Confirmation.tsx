import { TFunction } from 'next-i18next';
import React from 'react';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option, isObjectOption } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';

import { useJobs } from '../api/job';
import { formatYearsOfCareer, validateUserInfoForm } from '../lib';
import styles from './index.module.scss';
import { StateName, ChangedValue } from '../hooks/useUserInfoState';
import { useQueryParams } from 'common/hooks/router/useQueryParams';
import { UserInfoState } from './UserInfo';

interface ConfirmationProps {
  t: TFunction;
  locale: string;
  isMobile: boolean;
  userInfo: UserInfoState;
}

const Confirmation = ({ t, locale, isMobile, userInfo }: ConfirmationProps) => {
  return (
    <div className={styles._CONTAINER_}>
      <div className={styles.confirm_content}>
        <UserInfoConfirmation t={t} userInfo={userInfo} />

        <div style={{ width: '100%', backgroundColor: 'black' }}></div>

        <div>
          <Text>
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
          </Text>
        </div>
      </div>
      <div>
        <Button
          size={isMobile ? 'sm' : 'lg'}
          buttonColor="blue"
          // fullWidth
          // disabled={!validateUserInfoForm(userInfo)}
          label={{
            labelText: t('label.go-to-resume-page') ?? '',
            labelTailingIcon: <Icon.Arrow flip />,
          }}
        />
        <Button
          size={isMobile ? 'sm' : 'lg'}
          buttonColor="blue"
          // fullWidth
          // disabled={!validateUserInfoForm(userInfo)}
          label={{
            labelText: t('label.go-to-resume-page') ?? '',
            labelTailingIcon: <Icon.Arrow flip />,
          }}
        />
      </div>
    </div>
  );
};

export default Confirmation;

interface UserInfoConfirmationProps {
  t: TFunction;
  userInfo: UserInfoState;
}

const UserInfoConfirmation = ({ t, userInfo }: UserInfoConfirmationProps) => {
  const notSelected = 'not selected';

  return (
    <div>
      <div>
        <Text>{t('label.job')}</Text>
        <Text>
          {userInfo.selectedJob && isObjectOption(userInfo.selectedJob)
            ? userInfo.selectedJob.name
            : notSelected}
        </Text>
      </div>

      <div>
        <Text>{t('label.nation')}</Text>
        <Text>
          {userInfo.selectedLanguage && isObjectOption(userInfo.selectedLanguage)
            ? userInfo.selectedLanguage.name
            : notSelected}
        </Text>
      </div>

      <div>
        <Text>{t('label.difficulty')}</Text>
        <Text>
          {userInfo.selectedDifficulty && isObjectOption(userInfo.selectedDifficulty)
            ? userInfo.selectedDifficulty.name
            : notSelected}
        </Text>
      </div>

      <div>
        <Text>{t('label.years-of-experience')}</Text>
        <Text>{userInfo.selectedYearsOfCareer}</Text>
      </div>
    </div>
  );
};
