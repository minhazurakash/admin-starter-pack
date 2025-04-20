import { Form } from 'antd';
import { FormContext } from 'antd/es/form/context';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

const useValue = ({
  id,
  defaultValue,
  value,
  onFocus,
  onBlur,
}: {
  id?: string;
  defaultValue?: any;
  value?: any;
  onFocus?: (...args: any) => void;
  onBlur?: (...args: any) => void;
}) => {
  const initFlag = useRef(false);
  const [isFocus, setFocus] = useState(false);
  const { form, name: formName } = useContext(FormContext);
  const [inputValue, setInputValue] = useState(defaultValue ?? value);
  const changeValue = Form.useWatch(formName ? id?.replace(formName + '_', '') : id, form);

  const handleFocusFn = useCallback(
    (...args: any) => {
      setFocus(true);
      if (typeof onFocus === 'function') onFocus(...args);
    },
    [onFocus],
  );

  const handleBlurFn = useCallback(
    (...args: any) => {
      setFocus(false);
      if (typeof onBlur === 'function') onBlur(args);
    },
    [onBlur],
  );

  useEffect(() => {
    if (initFlag.current) setInputValue(value);
    initFlag.current = true;
  }, [value]);

  useEffect(() => {
    if (form && id) setInputValue(changeValue);
  }, [id, changeValue, form]);

  return {
    hasValue: Array.isArray(inputValue) ? inputValue.length > 0 : typeof value === 'number' ? true : !!inputValue,
    handleChangeFn: setInputValue,
    handleFocusFn,
    handleBlurFn,
    isFocus,
  };
};

export default useValue;
