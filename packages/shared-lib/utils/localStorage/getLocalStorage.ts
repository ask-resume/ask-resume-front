export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  return null;
};
