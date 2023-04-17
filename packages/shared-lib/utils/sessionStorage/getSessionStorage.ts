export const getSessionStorage = <T>(key: string): T | null => {
  const value = window.sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
