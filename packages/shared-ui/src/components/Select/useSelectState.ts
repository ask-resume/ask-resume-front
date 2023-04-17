import React from 'react';
import { Option, isObjectOption } from '.';

interface UseSelectStateProps {
  initialSelected: Option | null;
  options: Option[];
}

/**
 * Custom hook for changing Select component state.
 * @param {Option | null} initialSelected - The initial job option.
 * @param {Option[]} options - The options to be displayed in the select.
 * @returns {[Option | null, (option: Option | null) => void]} - An array with the selected option and a function to handle changes.
 */
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
