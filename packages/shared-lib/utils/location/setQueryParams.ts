export type UrlParams = {
  [key: string]: string;
};

const setQueryParams = (params: UrlParams) => {
  const url = new URL(window.location.origin);

  for (const [key, value] of Object.entries(params)) {
    const isParamEmpty = value !== '';
    if (isParamEmpty) {
      url.searchParams.set(key, value);
    }
  }

  window.history.replaceState({}, '', url);
};

export { setQueryParams };
