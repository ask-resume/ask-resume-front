import React from 'react';
import { Option, isObjectOption } from 'shared-ui/src/components/Select';

interface UseSelectStateProps {
  locale: string;
  initialSelected: Option | null;
  options: Option[];
}

export const useSelectState = ({
  locale,
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

  React.useEffect(() => {
    setSelected(initialSelected);
  }, [locale]);

  const selectedOption =
    options.find(option => isObjectOption(option) && option.value === selected) || null;

  return [selectedOption, handleSelectChange];
};
