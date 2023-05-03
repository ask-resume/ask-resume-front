import React from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import './index.scss';

type Placement =
  | '_top-left'
  | '_top'
  | '_top-right'
  | '_left'
  | '_right'
  | '_bottom-left'
  | '_bottom'
  | '_bottom-right';

export interface TooltipProps {
  className?: string;
  children: JSX.Element;
  tooltipText: string;
  placement?: Placement;
  withArrow?: boolean;
  colorOption?: {
    bgColor?: ColorMap;
    textColor?: ColorMap;
  };
}

const Tooltip = ({
  className,
  children,
  tooltipText,
  placement = '_bottom',
  withArrow = true,
  colorOption,
}: TooltipProps) => {
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className={cn('_TOOLTIP_', className, placement)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      style={{
        backgroundColor: colorOption?.bgColor,
      }}
    >
      <div
        className={cn('_target', { 'with-arrow': withArrow })}
        style={{
          backgroundColor: colorOption?.bgColor,
        }}
      >
        {children}
        {tooltipText.length > 0 && (
          <TooltipBox
            textColor={colorOption?.textColor}
            tooltipText={tooltipText}
            hovered={hovered}
          />
        )}
      </div>
    </div>
  );
};

export default Tooltip;

interface TooltipBoxProps {
  textColor?: ColorMap;
  tooltipText: string;
  hovered: boolean;
}

const TooltipBox = ({ textColor = ColorMap.white, tooltipText, hovered }: TooltipBoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        color: textColor,
      }}
      ref={ref}
      className={cn('_tooltip-box', { appear: hovered })}
    >
      {tooltipText}
    </div>
  );
};
