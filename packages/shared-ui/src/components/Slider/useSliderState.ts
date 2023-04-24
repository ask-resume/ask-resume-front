import React from 'react';

interface UseSliderStateProps {
  initialValue: number;
}

export const useSliderState = ({
  initialValue,
}: UseSliderStateProps): [number, (option: number) => void] => {
  const [value, setValue] = React.useState(initialValue);
  const handleChangeValue = React.useCallback((newValue: number) => {
    setValue(newValue);
  }, []);

  return [value, handleChangeValue];
};
