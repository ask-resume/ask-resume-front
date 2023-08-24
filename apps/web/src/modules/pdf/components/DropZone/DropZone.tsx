import styles from './DropZone.module.scss';

import { useRef } from 'react';

import Icon from 'shared-ui/src/components/Icon';

interface DropZoneProps {
  accept?: string;
  hintText?: string;
  onChange?: React.ChangeEventHandler;
}

const DropZone = ({ accept, hintText = 'Drag & Drop a file', onChange }: DropZoneProps) => {
  const fileInputRef = useRef(null);

  const handleClick: React.MouseEventHandler = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.DropZone} onClick={handleClick}>
      <input ref={fileInputRef} type="file" hidden accept={accept} onChange={onChange} />
      <Icon.AirPlane />
      <p className={styles.hintText}>{hintText}</p>
    </div>
  );
};

export default DropZone;
