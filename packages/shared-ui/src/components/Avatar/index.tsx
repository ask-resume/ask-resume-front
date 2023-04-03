import React from 'react';
import cn from 'classnames';
import './index.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string | null;
  userId?: number;
  name?: string;
  size?:
    | /*24px*/ 'xs'
    | /*32px*/ 'sm'
    | /*40px*/ 'md'
    | /*48px*/ 'lg'
    | /*60px*/ 'xl'
    | /*150px*/ 'xxl';
  customSize?: number;
  variant?: 'profile' | 'workspace';
}

const Avatar = ({
  className,
  src,
  userId,
  name,
  size = 'sm',
  variant = 'profile',
  customSize,
  ...props
}: AvatarProps) => {
  const avatarName = name ? name[0] : '';

  return (
    <div
      className={cn(
        '_AVATAR_CONTAINER_',
        className,
        !customSize ? size : customSize > 60 ? 'xxl' : customSize > 40 ? 'lg' : 'sm',
        variant,
      )}
      style={{
        width: customSize,
        minWidth: customSize,
        height: customSize,
        fontSize: customSize && customSize * 0.5,
      }}
      {...props}
    >
      <div className={cn('_AVATAR_', size)}>
        <div className="image">
          {src ? (
            <img src={src} alt={avatarName} />
          ) : (
            <div className={cn('default-image')}>{avatarName}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
