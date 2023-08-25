import styles from './DropZone.module.scss';

import { useRef } from 'react';

import Icon from 'shared-ui/src/components/Icon';

interface DropZoneProps {
  accept?: string;
  hintText?: string;
  onChange?: React.ChangeEventHandler;
  onDrop: React.DragEventHandler;
}

const DropZone = ({ accept, hintText = 'Drag & Drop a file', onChange, onDrop }: DropZoneProps) => {
  const fileInputRef = useRef(null);

  const handleClick: React.MouseEventHandler = () => {
    fileInputRef.current?.click();
  };

  const handleDrop: React.DragEventHandler = event => {
    event.preventDefault();
    onDrop(event);
  };

  return (
    <div
      className={styles.DropZone}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
    >
      <input ref={fileInputRef} type="file" hidden accept={accept} onChange={onChange} />
      <Icon.AirPlane />
      <p className={styles.hintText}>{hintText}</p>
    </div>
  );
};

export default DropZone;
