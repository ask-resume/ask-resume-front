import React from 'react';
import styles from './index.module.scss';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';

const Footer = () => {
  return (
    <footer className={styles._FOOTER_}>
      <div className={styles._item}>
        <Text textColor={ColorMap.gray_7} weight="bold">
          GitHub
        </Text>

        <a target="_blank" href="https://github.com/132262B/ask-resume-backend">
          <Text size="xx_small" textColor={ColorMap.gray_6}>
            Backend Repo
          </Text>
        </a>
        <a target="_blank" href="https://github.com/dev-redo/ask-resume-front">
          <Text size="xx_small" textColor={ColorMap.gray_6}>
            Frontend Repo
          </Text>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
