import React from 'react';
import styles from './index.module.scss';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';

const Footer = () => {
  return (
    <footer className={styles._FOOTER_}>
      <div className={styles._item}></div>
    </footer>
  );
};

export default Footer;
