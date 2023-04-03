import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from '../../hooks';

describe('UNIT: usePrevious hook should return correct value', () => {
  it('should return undefined on first render', () => {
    const { result } = renderHook(() => usePrevious(0));
    expect(result.current).toBeUndefined();
  });

  it('should return previous value on subsequent renders', () => {
    const { result, rerender } = renderHook(props => usePrevious(props), {
      initialProps: 0,
    });

    expect(result.current).toBeUndefined();
    rerender(1);

    expect(result.current).toEqual(0);
    rerender(2);

    expect(result.current).toEqual(1);
  });
});
