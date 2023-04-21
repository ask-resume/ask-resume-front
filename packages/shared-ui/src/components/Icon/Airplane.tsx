import React from 'react';
import { ColorMap } from '../../config/colorMap';
import './index.scss';
import cn from 'classnames';

export interface AirplaneProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const AirPlane = ({
  color = ColorMap.white,
  className,
  size = 16,
  rotate,
  flip,
}: AirplaneProps) => {
  return (
    <i
      className={cn('dds-icon', className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="none">
        <path
          id="icon__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4069 0.592992C17.8716 0.0593282 17.0839 -0.133866 16.3622 0.0943935L1.41675 4.81643C0.604556 5.07316 0.0396771 5.80843 0.00189709 6.6597C-0.0347628 7.50958 0.462722 8.29324 1.24909 8.62035L7.56739 11.2505C7.58488 11.2806 7.6058 11.3093 7.63019 11.3362C7.6658 11.3753 7.70621 11.4076 7.7497 11.4327L10.3799 17.751C10.7068 18.5373 11.4906 19.0345 12.3406 18.9981C13.1921 18.9603 13.9271 18.3954 14.1839 17.5833C15.5232 13.3452 17.7352 6.34291 18.9055 2.63762C19.134 1.91596 18.9406 1.12801 18.4069 0.592992ZM8.95378 10.8086L11.627 17.2319C11.7365 17.4941 11.9973 17.6603 12.281 17.6481C12.5647 17.6346 12.8095 17.4468 12.8959 17.1765C13.3705 15.6744 13.9544 13.8256 14.5628 11.8994C15.6714 8.38961 16.861 4.62314 17.6175 2.23077C17.6933 1.9903 17.6297 1.72675 17.4512 1.54827C17.2729 1.37 17.0094 1.30643 16.7687 1.38199L16.769 1.38227L1.82296 6.10377C1.55262 6.19018 1.36485 6.43473 1.35128 6.71863C1.33906 7.00231 1.50534 7.26315 1.76754 7.37265L8.27007 10.0787L13.1638 5.62987C13.3682 5.44411 13.6844 5.45917 13.8701 5.6635C14.0559 5.86783 14.0408 6.18405 13.8365 6.36981L8.95378 10.8086Z"
          fill={color}
        />
      </svg>
    </i>
  );
};
