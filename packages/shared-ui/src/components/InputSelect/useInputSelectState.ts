import React from 'react';
import { Option } from '../Select';

/**
  Custom hook for changing Input Select component state.
  @param {Option | null} initSelected - The initial job option.
  @returns {[Option | null, (option: Option | null) => void]} - An array with the selected option and a function to handle changes.
  @description This hook returns an array containing the currently selected option and a function to update it. If an object option is selected, it returns the id property of that option instead of the entire object, so the caller should use that id to retrieve the corresponding value.
*/
export const useInputSelectedState = (
  initSelected: Option | null,
): [Option | null, (option: Option | null) => void] => {
  const [selected, setSelected] = React.useState<Option | null>(initSelected);

  const handleInputSelectChange = React.useCallback((option: Option | null) => {
    setSelected(option);
  }, []);

  return [selected, handleInputSelectChange];
};
