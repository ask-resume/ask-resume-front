import React from 'react';
import './index.scss';

import { useRef } from 'react';

import Icon from '../Icon';

interface DropZoneProps {
  accept?: string;
  hintText?: string;
  onChange?: React.ChangeEventHandler;
  onDrop: React.DragEventHandler;
}

const DropZone = ({ accept, hintText = 'Drag & Drop a file', onChange, onDrop }: DropZoneProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick: React.MouseEventHandler = () => {
    fileInputRef.current?.click();
  };

  const handleDrop: React.DragEventHandler = event => {
    event.preventDefault();
    onDrop(event);
  };

  return (
    <div
      className="DropZone"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
    >
      <input ref={fileInputRef} type="file" hidden accept={accept} onChange={onChange} />
      <Icon.AirPlane />
      <p className="hint-text">{hintText}</p>
    </div>
  );
};

export default DropZone;
