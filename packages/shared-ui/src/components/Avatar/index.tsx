import React, { HTMLAttributes } from 'react';
import './index.scss';
import cn from 'classnames';
import { getRandomColor } from '../../utils/getRandomColor';

export interface IAvatarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  src: string | null;
  name?: string;
  size?:
    | /*24px*/ 'xs'
    | /*32px*/ 'sm'
    | /*40px*/ 'md'
    | /*48px*/ 'lg'
    | /*60px*/ 'xl'
    | /*150px*/ 'xxl';
}

const Avatar: React.FC<IAvatarProps> = ({ className, src, name, size = 'sm', ...props }) => {
  return (
    <div className={cn('_AVATAR_CONTAINER_', className, size)} {...props}>
      <div className={cn('_AVATAR_', size)}>
        <div className="image">
          {src ? (
            <img src={src} alt={name ?? ''} />
          ) : (
            <div
              className={cn('default-image')}
              style={{
                backgroundColor: getRandomColor(),
              }}
            >
              {name ? name[0] : ''}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
