export const setSessionStorage = <T>(key: string, value: T): void => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};
