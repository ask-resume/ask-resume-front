import React from 'react';
import { Option } from 'shared-ui/src/components/Select';

interface UserInputSelectedStateProps {
  locale: string;
  initSelected: Option | null;
}

export const useInputSelectedState = ({
  locale,
  initSelected,
}: UserInputSelectedStateProps): [Option | null, (option: Option | null) => void] => {
  const [selected, setSelected] = React.useState<Option | null>(initSelected);
  const handleInputSelectChange = React.useCallback((option: Option | null) => {
    setSelected(option);
  }, []);

  React.useEffect(() => {
    setSelected(initSelected);
  }, [locale]);

  return [selected, handleInputSelectChange];
};
