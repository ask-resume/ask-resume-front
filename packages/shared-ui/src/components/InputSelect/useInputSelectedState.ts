import React from 'react';
import { Option } from '../Select';

interface UserInputSelectedStateProps {
  initSelected: Option | null;
}

export const useInputSelectedState = ({
  initSelected,
}: UserInputSelectedStateProps): [Option | null, (option: Option | null) => void] => {
  const [selected, setSelected] = React.useState<Option | null>(initSelected);
  const handleInputSelectChange = React.useCallback((option: Option | null) => {
    setSelected(option);
  }, []);

  return [selected, handleInputSelectChange];
};
