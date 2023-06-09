import React from 'react';

interface ComponentProps {
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

const CloseBoxOnOutside = ({ onClose, children }: ComponentProps) => {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  useCloseBoxOnOutside({ ref: wrapRef, onClose });

  return <div ref={wrapRef}>{children}</div>;
};

interface CloseBoxHookProps {
  ref: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

const useCloseBoxOnOutside = ({ ref, onClose }: CloseBoxHookProps) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, onClose]);
};

export default CloseBoxOnOutside;
