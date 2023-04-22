import React from 'react';
import { Option, isObjectOption } from 'shared-ui/src/components/Select';

interface UseSelectStateProps {
  initialSelected: Option | null;
  options: Option[];
}

export const useSelectState = ({
  initialSelected,
  options,
}: UseSelectStateProps): [Option | null, (option: Option) => void] => {
  const [selected, setSelected] = React.useState(initialSelected);
  const handleSelectChange = React.useCallback((option: Option) => {
    if (isObjectOption(option)) {
      setSelected(option.value!);
      return;
    }
    setSelected(option);
  }, []);

  const selectedOption =
    options.find(option => isObjectOption(option) && option.value === selected) || null;

  return [selectedOption, handleSelectChange];
};
