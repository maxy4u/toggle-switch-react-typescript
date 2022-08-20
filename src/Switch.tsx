import * as React from 'react';
const { memo } = React;

type Tswitch = {
  name: string;
  id: string;
  className: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

function Switch({
  name,
  id,
  className,
  onChange,
  disabled = false,
}: Tswitch): JSX.Element {
  return (
    <label htmlFor={id} className={`${className} switch`}>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="slider"></span>
    </label>
  );
}

export default memo(Switch);
