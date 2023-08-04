import React from 'react';
import { useTranslation } from 'next-i18next';
import { uid } from 'react-uid';
import { useIsMobile } from 'shared-lib/hooks/media-query';

import styles from './index.module.scss';
import Accordion, { AccordionItem } from 'shared-ui/src/components/Accordion';
import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';
import { PredictionResponse } from 'modules/interviewQuestion/api/interviewQuestions';
import { ResultTranslateNamespaces } from 'modules/form/constants';
import { getNewline, exportAsTextFile } from 'shared-lib/utils/file/text';

interface ResultProps {
  resumeData: PredictionResponse[];
}

const Result = ({ resumeData }: ResultProps) => {
  const { t } = useTranslation(ResultTranslateNamespaces);
  const isMobile = useIsMobile();

  const downloadGeneratedResult = () => {
    const parsedResumeDataToDownload = resumeData
      .map((info, index) => {
        return `${t('result.question', {
          index: index + 1,
          question: info.question,
        })}${getNewline()}${getNewline()}${t('result.answer', {
          index: index + 1,
          answer: info.bestAnswer,
        })}${getNewline()}${getNewline()}`;
      })
      .join('');
    exportAsTextFile({ fileName: 'generated-qa', text: parsedResumeDataToDownload });
  };

  return (
    <div className={styles._result}>
      {/* Generated Result */}
      <Accordion>
        {resumeData.map((info, index) => {
          return (
            <AccordionItem
              classNames={styles.accordion_item}
              key={uid(index)}
              title={t('result.question', { index: index + 1, question: info.question })}
            >
              <Text lineHeight="wide">
                {t('result.answer', { index: index + 1, answer: info.bestAnswer })}
              </Text>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* Download the generated result. */}
      <Button
        className={styles.button}
        rounded
        size={isMobile ? 'md' : 'lg'}
        buttonColor="blue"
        label={{ labelText: t('result.button'), labelTailingIcon: <Icon.AirPlane /> }}
        onClick={downloadGeneratedResult}
      />
    </div>
  );
};

export default Result;
