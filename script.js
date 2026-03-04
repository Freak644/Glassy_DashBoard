import {handleDate,handleTime} from './helperFun.js'


function setUp(){
    let videoTag = document.createElement("video");

    videoTag.autoplay = true;
    videoTag.loop = true;
    videoTag.muted = true;
    videoTag.playsInline = true;

    videoTag.classList.add("bg-video");

    let source = document.createElement("source");
    source.src = "./assest/defaultVid.mp4";
    source.type = "video/mp4";

    videoTag.appendChild(source);

    document.body.appendChild(videoTag);

  handleTime()
  handleDate()
}



setUp()