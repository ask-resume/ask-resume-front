import { uid } from 'react-uid';
import { TFunction } from 'next-i18next';
import Tabs from 'shared-ui/src/components/Tabs';
import TabItem from 'shared-ui/src/components/Tabs/TabItem';

export interface ResumeTabsProps {
  t: TFunction;
  isMobile: boolean;
  select: number;
  onChangeSelect: (newSelect: number) => void;
}

const TAB_CNT = 4;

const ResumeTabs = ({ t, isMobile, select, onChangeSelect }: ResumeTabsProps) => {
  const TAB_SIZE = isMobile ? 'sm' : 'md';

  return (
    <Tabs size={TAB_SIZE}>
      {[...Array(TAB_CNT)].map((_, idx) => (
        <TabItem
          key={uid(idx)}
          size={TAB_SIZE}
          label={t('resume_info.tab', { idx: idx + 1 }) ?? ''}
          onClick={() => onChangeSelect(idx)}
          selected={select === idx}
        />
      ))}
    </Tabs>
  );
};

export default ResumeTabs;
