import { TFunction } from 'next-i18next';

const getResumeSelectObj = (t: TFunction) => [
  {
    id: 'introduction',
    name: t('resume_info.select.introduction'),
  },
  {
    id: 'career',
    name: t('resume_info.select.career'),
  },
  {
    id: 'education',
    name: t('resume_info.select.education'),
  },
  {
    id: 'technical',
    name: t('resume_info.select.technical'),
  },
  {
    id: 'outsideActivities',
    name: t('resume_info.select.outsideActivities'),
  },
  {
    id: 'project',
    name: t('resume_info.select.project'),
  },
  {
    id: 'aac',
    name: t('resume_info.select.acc'),
  },
];

export { getResumeSelectObj };
