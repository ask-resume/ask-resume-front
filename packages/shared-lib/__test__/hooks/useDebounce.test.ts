import { renderHook } from '@testing-library/react-hooks';
import { useDebounce } from '../../hooks';

// FIX: shared-lib package's unit test code failed
test('UNIT: useDebounce hook should call callback after debounce time', async () => {
  const callback = jest.fn();
  const debounceTime = 1000;

  const { result } = renderHook(() => useDebounce(callback, debounceTime));
  result.current();

  expect(callback).not.toBeCalled();
  await new Promise(r => setTimeout(r, debounceTime));
  expect(callback).toBeCalled();
});
