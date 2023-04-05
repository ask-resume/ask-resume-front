import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CloseBoxOnOutside } from '../../hooks';

describe('CloseBoxOnOutside', () => {
  test('closes the box when clicked outside', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <CloseBoxOnOutside onClose={onClose}>
        <div>Box content</div>
      </CloseBoxOnOutside>,
    );

    // Simulate click outside of the box
    fireEvent.mouseDown(document.body);
    expect(onClose).toHaveBeenCalled();
  });
});
