export const handleDate = () => {
    let el = document.getElementById("dateCol")
    let DateStr = new Date();
    let crtDate = DateStr.getDate();
    let month = DateStr.getMonth() + 1;
    let dateSpan = document.createElement("span")
    dateSpan.innerHTML = crtDate;
    dateSpan.style.fontSize = "34px"
    el.append(dateSpan);
    let monthSpan = document.createElement("span")
    monthSpan.innerHTML = "March"
    monthSpan.style.fontSize = "16px"
    el.append(monthSpan);
}

const secEl = document.getElementById("sec");
const minEl = document.getElementById("min");
const hourEl = document.getElementById("ho");

export const handleTime = () => {
    const now = new Date();

    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDeg = seconds * 6;                 // 360 / 60
    const minDeg = minutes * 6 + seconds * 0.1; // smooth minute movement
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    secEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
};

export const getWeatherData = async (api_ke,city)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_ke}&units=metric`
    let rqst = await fetch(url);
    let data = await rqst.json();
    ShowData(data)
}

function ShowData(data) {
        let divs=document.getElementById('dtemp').children
        let wind=document.getElementById('curson')
        let speed=document.getElementById('speed')
        let image=document.createElement('img')
        let hor = new Date().getHours();
        console.log(divs,wind,speed,image)
        if (divs[0].children.length==1) {
            divs[0].children[0].remove();
        }
        if (hor<7 || hor>18) {
            image.src='https://i.postimg.cc/vH6f4PD3/monbg.png'
          divs[0].classList.add('rottate')
         }else{
         image.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      }
      divs[0].append(image);
      divs[1].innerHTML=Math.round(data.main.temp)+'°'
    //   divs[2].innerHTML= new Date((data.sys.sunrise+data.timezone)* 1000).toLocaleTimeString();
      divs[2].innerHTML=Math.round(data.main.temp_max)+'°'
      divs[3].innerHTML=Math.round(data.main.temp_min)+'°'
      divs[4].innerHTML=data.name;
      speed.innerHTML='Speed: '+data.wind.speed;
      wind.style.transform=`rotate(${data.wind.deg}deg)`
      divs[5].innerHTML=data.weather[0].description.toUpperCase();
    }


setInterval(handleTime,50)