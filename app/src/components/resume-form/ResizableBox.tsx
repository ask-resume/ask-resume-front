import React from 'react';
import './INDEX.css';

// TODO: Modify to receive two div boxes as arguments
const ResizableBox = () => {
  const [boxWidth, setBoxWidth] = React.useState<number>(50);

  const handleMouseDown = (): void => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent): void => {
    const containerWidth = document.getElementById('container')!.offsetWidth;
    const newBoxWidth = (event.clientX / containerWidth) * 100;
    setBoxWidth(newBoxWidth);
  };

  const handleMouseUp = (): void => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div id="container" className="container">
      <div style={{ width: `${boxWidth}%` }} className="box1" />
      <div onMouseDown={handleMouseDown} className="divider" style={{ left: `${boxWidth}%` }} />
      <div style={{ width: `${100 - boxWidth}%` }} className="box2" />
    </div>
  );
};

export default ResizableBox;
