
import { pre } from "framer-motion/client";
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
      "quickAcces":[
        {
          url: "https://mail.google.com/",
          icon: "	https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png",
          name: "Gmail"
        },
        {
          url: "https://www.youtube.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com",
          name: "YouTube"
        },
        {
          url: "https://monkeytype.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=monkeytype.com",
          name: "Monkeytype"
        }
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

export const Apps = create((set, get) => ({
  array: [
  // AI
        {
          url: "https://chatgpt.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com",
          name: "ChatGPT"
        },
        {
          url: "https://gemini.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=gemini.google.com",
          name: "Gemini"
        },
        {
          url: "https://claude.ai/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
          name: "Claude"
        },

        // Google
        {
          url: "https://mail.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=gmail.com",
          name: "Gmail"
        },
        {
          url: "https://drive.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=drive.google.com",
          name: "Drive"
        },
        {
          url: "https://docs.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=docs.google.com",
          name: "Docs"
        },
        {
          url: "https://sheets.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=sheets.google.com",
          name: "Sheets"
        },
        {
          url: "https://slides.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=slides.google.com",
          name: "Slides"
        },
        {
          url: "https://calendar.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=calendar.google.com",
          name: "Calendar"
        },
        {
          url: "https://photos.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=photos.google.com",
          name: "Photos"
        },
        {
          url: "https://meet.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=meet.google.com",
          name: "Meet"
        },
        {
          url: "https://news.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=news.google.com",
          name: "News"
        },
        {
          url: "https://maps.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=maps.google.com",
          name: "Maps"
        },
        {
          url: "https://keep.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=keep.google.com",
          name: "Keep"
        },
        {
          url: "https://contacts.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=contacts.google.com",
          name: "Contacts"
        },
        {
          url: "https://translate.google.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=translate.google.com",
          name: "Translate"
        },
        {
          url: "https://www.youtube.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com",
          name: "YouTube"
        },

        // Developer
        {
          url: "https://github.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=github.com",
          name: "GitHub"
        },
        {
          url: "https://gitlab.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=gitlab.com",
          name: "GitLab"
        },
        {
          url: "https://stackoverflow.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com",
          name: "Stack Overflow"
        },
        {
          url: "https://codepen.io/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=codepen.io",
          name: "CodePen"
        },
        {
          url: "https://replit.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=replit.com",
          name: "Replit"
        },
        {
          url: "https://vercel.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=vercel.com",
          name: "Vercel"
        },

        // Productivity
        {
          url: "https://www.notion.so/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=notion.so",
          name: "Notion"
        },
        {
          url: "https://trello.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=trello.com",
          name: "Trello"
        },
        {
          url: "https://slack.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=slack.com",
          name: "Slack"
        },
        {
          url: "https://discord.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=discord.com",
          name: "Discord"
        },

        // Learning
        {
          url: "https://www.w3schools.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=w3schools.com",
          name: "W3Schools"
        },
        {
          url: "https://developer.mozilla.org/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=developer.mozilla.org",
          name: "MDN"
        },
        {
          url: "https://www.freecodecamp.org/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org",
          name: "freeCodeCamp"
        },

        // Typing
        {
          url: "https://monkeytype.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=monkeytype.com",
          name: "Monkeytype"
        },
        {
          url: "https://play.typeracer.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=typeracer.com",
          name: "TypeRacer"
        },

        // Social
        {
          url: "https://reddit.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=reddit.com",
          name: "Reddit"
        },
        {
          url: "https://x.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=x.com",
          name: "X"
        },
        {
          url: "https://linkedin.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=linkedin.com",
          name: "LinkedIn"
        },

        // Entertainment
        {
          url: "https://netflix.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=netflix.com",
          name: "Netflix"
        },
        {
          url: "https://spotify.com/",
          icon: "https://www.google.com/s2/favicons?sz=64&domain=spotify.com",
          name: "Spotify"
        }
      ],

      setApp: (newApp = {}) => {
        if (Object.keys(newApp).length < 3) return;

        const allAps = get.array;
        allAps.push(newApp);

        set({array: allAps})
      }

}));


export const useTabToggle = create((set) => ({
  tabObj: {
    allApps: false,
    settings: false,
    profile: false,
  },

  toggleTabs: (tabName) => 
    set(() => ({
      tabObj: {
        allApps: tabName === "allApps",
        settings: tabName === "settings",
        profile: tabName === "profile",
      },
    })),
}));