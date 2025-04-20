import useValue from '@base/antd/hooks/useValue';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { useCallback, useMemo } from 'react';
import FloatLabel from '../FloatLabel';
import './index.css';

export interface FloatRangePickerProps extends RangePickerProps {
  required?: boolean;
}

const FloatRangePicker = ({
  placeholder,
  defaultValue,
  value,
  onFocus,
  onBlur,
  onChange,
  required,
  style,
  ...rest
}: FloatRangePickerProps) => {
  const { hasValue, handleChangeFn, handleBlurFn, handleFocusFn, isFocus } = useValue({
    id: rest.id?.toString(),
    defaultValue,
    value,
    onFocus,
    onBlur,
  });

  const changeHandlerFn = useCallback<Exclude<RangePickerProps['onChange'], undefined>>(
    (value, dateString) => {
      handleChangeFn(value);
      if (onChange) onChange(value, dateString);
    },
    [onChange, handleChangeFn],
  );

  const haveValue = useMemo(() => {
    return isFocus || hasValue;
  }, [hasValue, isFocus]);

  return (
    <FloatLabel
      label={haveValue && placeholder ? placeholder.join(' - ') : null}
      focused={isFocus}
      haveValue={haveValue}
      width={style?.width}
      height={style?.height}
      required={required}
      status={rest.status || (rest['aria-invalid'] ? 'error' : undefined)}
    >
      <DatePicker.RangePicker
        style={{ width: '100%', border: 'none', ...style }}
        variant="borderless"
        {...rest}
        onFocus={handleFocusFn}
        onBlur={handleBlurFn}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandlerFn}
        rootClassName="ant-float-label-form-picker"
        placeholder={haveValue && placeholder ? null : placeholder}
      />
    </FloatLabel>
  );
};

export default FloatRangePicker;
