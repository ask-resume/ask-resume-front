import React from 'react';

export const useSliderState = (initialValue: number): [number, (option: number) => void] => {
  const [value, setValue] = React.useState(initialValue);

  const handleChangeValue = React.useCallback((newValue: number) => {
    setValue(newValue);
  }, []);

  return [value, handleChangeValue];
};
