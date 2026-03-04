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

export const handleTime = () => {
    let secn=document.getElementById('sec')
    let minn=document.getElementById('min')
    let hour=document.getElementById('ho')
    let obj=new Date()
    let val=obj.getMinutes();
    let hrours=obj.getHours();
    let secondsin=obj.getSeconds();
    let sec= 6*secondsin+12;
    let min=6*val;
    let howr = 0
    if (hrours===12) {
        howr=0.5*val
    }else{
        let hVal = hrours - 12;
        howr=(30*hVal)+(0.5*val)
    }
    secn.style.transform=`rotate(${sec}deg)`
    minn.style.transform=`rotate(${min}deg)`
    hour.style.transform=`rotate(${howr}deg)`;
    setTimeout(handleTime,1000)
}