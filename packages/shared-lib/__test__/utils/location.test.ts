import { getQueryParams } from '../../utils/location';

describe('UNIT: getQueryParams', () => {
  it('should return an object with query parameters', () => {
    const url = 'https://example.com/search?query=hello&page=2';
    Object.defineProperty(window, 'location', {
      value: new URL(url),
    });

    expect(getQueryParams()).toEqual({
      query: 'hello',
      page: '2',
    });
  });

  it('should return an empty object if no query parameters are present', () => {
    const url = 'https://example.com';
    Object.defineProperty(window, 'location', {
      value: new URL(url),
    });

    expect(getQueryParams()).toEqual({});
  });
});
