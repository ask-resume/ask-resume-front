export const setLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};
