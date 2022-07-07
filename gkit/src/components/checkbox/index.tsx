import './style.less';
import classNames from 'classnames';
import { CheckmarkFilledIcon } from 'components/icons';
import React, { PropsWithChildren } from 'react';

export type CheckboxProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  idQa?: string;
  idQaCheckbox?: string;
  icon?: JSX.Element;
}>;

export function Checkbox({
  children,
  hover,
  disabled,
  checked,
  idQa,
  idQaCheckbox,
  onChange = () => {},
  className,
  icon = <CheckmarkFilledIcon />,
}: CheckboxProps) {
  return (
    <label className={classNames('gkit-checkbox', className)} id-qa={idQa}>
      <input id-qa={idQaCheckbox} type="checkbox" disabled={disabled} checked={checked} onChange={onChange} />
      <span className={classNames('checkbox', { hover })}>{checked && icon}</span>

      {children && <span className="checkbox-span">{children}</span>}
    </label>
  );
}
