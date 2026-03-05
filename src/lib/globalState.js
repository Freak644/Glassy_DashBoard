import { create } from "zustand";

export const database = create((set, get) => ({
  db: {},

  setDB: (data = {}) =>
    set((state) => {
      if (!data || Object.keys(data).length === 0) return state;

      const newDb = { ...state.db };

      for (const key of Object.keys(data)) {
        newDb[key] = {
          ...(newDb[key] || {}),
          ...data[key]
        };
      }

      // Save directly to chrome storage root
      chrome.storage.local.set(data, () => {
        console.log("Saved", data);
      });

      return { db: newDb };
    })
}));