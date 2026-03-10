import { create } from "zustand";

export const database = create((set, get) => ({
  db: {},
  

  setDB: (obj = {}) => {
    const current = get().db;
    let {data,isGet} = obj;

    if (!data || Object.keys(data).length === 0) return;
    const newDb = {...current };

    Object.keys(data).forEach(key=>{
        const value = data[key];
        console.log(value)
    
        if (typeof value === "object" && !Array.isArray(value)) {
          newDb[key] = {
            ...(newDb[key] || {}),
            ...value
          };
        } else {
          newDb[key] = value;
        }
    })
    // Save the FULL DB
    if (!isGet) {
      if (typeof chrome !== "undefined" && chrome.storage) {
        chrome.storage.local.set({ db: newDb }, () => {
          console.log("Saved", newDb);
        });
      } else {
        localStorage.setItem("Saved", JSON.stringify(newDb));
      }
    }

    set({ db: newDb });
  }
}));