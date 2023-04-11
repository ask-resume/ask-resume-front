import React from 'react';
import cn from 'classnames';
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
}

const Tooltip = ({
  className,
  children,
  tooltipText,
  placement = '_bottom',
  withArrow = true,
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
    >
      <div className={cn('_target', { 'with-arrow': withArrow })}>
        {children}
        {tooltipText.length > 0 && <TooltipBox tooltipText={tooltipText} hovered={hovered} />}
      </div>
    </div>
  );
};

export default Tooltip;

interface TooltipBoxProps {
  tooltipText: string;
  hovered: boolean;
}

const TooltipBox = ({ tooltipText, hovered }: TooltipBoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={cn('_tooltip-box', { appear: hovered })}>
      {tooltipText}
    </div>
  );
};
