import './style.less';
import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'normal' | 'large';

//                                    ( without bg )            ( with border )
type Types = 'primary' | 'secondary' | 'linkSecondary' | 'danger' | 'neutral' | 'linkNeutral';

type Props = React.PropsWithChildren<{
  size?: Sizes;
  type?: Types;
  disabled?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  asIcon?: boolean;
  className?: string;
  onClick?: () => void;
  idQa?: string;
  disablePrevent?: boolean;
}>;

export function Button({
  children,
  size = 'normal',
  hover,
  type = 'primary',
  disabled,
  active,
  focus,
  asIcon,
  className,
  onClick,
  idQa,
  disablePrevent,
}: Props) {
  return (
    <button
      id-qa={idQa}
      disabled={disabled}
      className={classNames('gkit-btn', className, size, type, { hover, active, focus, icon: asIcon })}
      onClick={e => {
        if (onClick) {
          !disablePrevent && e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}

type ButtonGroupProps<C extends typeof Button = typeof Button> = {
  children?: (React.ReactElement<Props, C> | null | false) | (React.ReactElement<Props, C> | null | false)[];
  className?: string;
  idQa?: string;
} & Pick<Props, 'size' | 'type' | 'asIcon'>;

export function ButtonGroup({ idQa, className, size, type, asIcon, children }: ButtonGroupProps) {
  return (
    <div className={classNames('gkit-btn-group', className)} id-qa={idQa}>
      {React.Children.map(
        children,
        child =>
          child &&
          React.cloneElement(child, {
            ...child.props,
            size: size ?? child.props.size,
            type: type ?? child.props.type,
            asIcon: asIcon ?? child.props.asIcon,
          })
      )}
    </div>
  );
}
