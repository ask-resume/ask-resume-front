import React from 'react';

interface UseSliderStateProps {
  locale: string;
  initialValue: number;
}

export const useSliderState = ({
  locale,
  initialValue,
}: UseSliderStateProps): [number, (option: number) => void] => {
  const [value, setValue] = React.useState(initialValue);
  const handleChangeValue = React.useCallback((newValue: number) => {
    setValue(newValue);
  }, []);

  React.useEffect(() => {
    setValue(initialValue);
  }, [locale]);

  return [value, handleChangeValue];
};
