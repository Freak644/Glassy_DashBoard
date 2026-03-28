
import { create } from "zustand";

export const database = create((set, get) => ({
  db: {
    "background":{
      load:"default",
      type:"image",
      isBlur:false
    },
    "name":{
      username:"User"
    },
    "searchWid":{
      isVisible:true,
      position:{
        x:10, y:10
      }
    },
    "clockWid":{
      isVisible:true,
      anaLog:true,
      position:{
        x:10, y:200
      }
    },
    "weatherWid":{
      isVisible:true,
      apiKey:"",
      city:"",
      position:{
        x:50, y:250,
      }
    },
    "bookmarks" : {

      Social: [
        {
          url: "https://www.facebook.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=facebook.com",
          name: "Facebook"
        },
        {
          url: "https://web.whatsapp.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com",
          name: "WhatsApp"
        },
        {
          url: "https://www.linkedin.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=linkedin.com",
          name: "LinkedIn"
        },
        {
          url: "https://twitter.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=twitter.com",
          name: "Twitter"
        }
      ],

      Dev: [
        {
          url: "https://github.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=github.com",
          name: "GitHub"
        },
        {
          url: "https://stackoverflow.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com",
          name: "StackOverflow"
        },
        {
          url: "https://www.codecove.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=codecove.com",
          name: "CodeCove"
        },
        {
          url: "https://codepen.io/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=codepen.io",
          name: "CodePen"
        }
      ],

      Learning: [
        {
          url: "https://www.youtube.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com",
          name: "YouTube"
        },
        {
          url: "https://monkeytype.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=monkeytype.com",
          name: "Monkeytype"
        },
        {
          url: "https://www.geeksforgeeks.org/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=geeksforgeeks.org",
          name: "GeeksforGeeks"
        },
        {
          url: "https://www.freecodecamp.org/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org",
          name: "freeCodeCamp"
        }
      ],

      Tools: [
        {
          url: "https://chat.openai.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=openai.com",
          name: "ChatGPT"
        },
        {
          url: "https://mail.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=gmail.com",
          name: "Gmail"
        },
        {
          url: "https://drive.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=drive.google.com",
          name: "Google Drive"
        },
        {
          url: "https://calendar.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=calendar.google.com",
          name: "Calendar"
        }
      ]
      },
      "myBookmarks":[

      ],
      "topBookSlide":{
        isTrue:false,
        data:[]
      }
  },
  

  setDB: (obj = {}) => {
    const current = get().db;
    let {data,isGet} = obj;

    if (!data || Object.keys(data).length === 0) return;
    const newDb = {...current };

    Object.keys(data).forEach(key=>{
        const value = data[key];
       // console.log(value)
    
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
          console.log("Saved");
        });
      } else {
        localStorage.setItem("Saved", JSON.stringify(newDb));
      }
    }
    //console.log(newDb)

    set({ db: newDb });
  }
}));