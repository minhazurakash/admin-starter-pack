// Storage utils functions using localStorage
export const storage = {
  // for save data to localStorage
  setData(key: string, data: any) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(data));
  },
  // for retrieve data from localStorage
  getData<T = any>(key: string) {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  },
  //for remove data from localStorage
  removeData(key: string) {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },
  // for clear all localStorage data
  clear() {
    if (typeof window === 'undefined') return;
    localStorage.clear();
  },
  // for clearing all except specific keys from localStorage
  clearExcept(keysToKeep: string[]) {
    if (typeof window === 'undefined') return;

    const savedData: Record<string, string | null> = {};

    keysToKeep.forEach((key) => {
      const value = localStorage.getItem(key);
      if (value !== null) {
        savedData[key] = value;
      }
    });

    localStorage.clear();

    Object.entries(savedData).forEach(([key, value]) => {
      if (value !== null) {
        localStorage.setItem(key, value);
      }
    });
  },
};
