const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//today

let city='cairo'
let inLocation=document.getElementById('inLocation')
inLocation.addEventListener('keyup',function(){
    city=inLocation.value
    city = city.toLowerCase();
    weatherToday(city)
    weatherTomorrow(city)
    weatherAfterTomorrow(city)
    console.log(city)
})




async function weatherToday(z){
    let x=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fc496dd78f86408ea66131202231602&q=${z}&days=3`)
    let r=await x.json()
    let todayDay=document.querySelector("#today #day")
    let todayDate=document.querySelector("#today #date")
    let todayImg=document.querySelector("#today #img")
    let todayLocation=document.querySelector("#today #location")
    let todayDegree=document.querySelector("#today #degree")
    let todayStatu=document.querySelector("#today #statu")
    let todayAir=document.querySelector("#today #air")
    let todayWind=document.querySelector("#today #wind")
    let todayDirection=document.querySelector("#today #direction")
    
    const d = new Date(r.forecast.forecastday[0].date);
    todayDay.innerHTML=`${days[d.getDay()]}`;
    todayDate.innerHTML=`${d.getDate()+months[d.getMonth()]}`
    todayLocation.innerHTML=`${r.location.name}`
    todayDegree.innerHTML=`${r.current.temp_c}`
    todayImg.innerHTML=`<img src="https:${r.current.condition.icon}"  class="w-100" alt="">`
    todayStatu.innerHTML=`${r.current.condition.text}`
    todayAir.innerHTML=`${r.forecast.forecastday[0].hour[0].cloud}%`
    todayWind.innerHTML=`${r.current.wind_kph} kPh`
    todayDirection.innerHTML=`${r.forecast.forecastday[0].hour[0].wind_dir}`
}
//end today
//tomorrow




async function weatherTomorrow(z)
{
    let x=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fc496dd78f86408ea66131202231602&q=${z}&days=3`)
    let r=await x.json()
    let tomorrowDay=document.querySelector("#tomorrow #day")
    let tomorrowImg=document.querySelector("#tomorrow #img")
    let tomorrowBig=document.querySelector("#tomorrow #bigDegree")
    let tomorrowSmall=document.querySelector("#tomorrow #smallDegree")
    let tomorrowStatu=document.querySelector("#tomorrow #statu")
    
    const d = new Date(r.forecast.forecastday[1].date);
    tomorrowDay.innerHTML=`${days[d.getDay()]}`
    tomorrowImg.innerHTML=`<img src="https:${r.forecast.forecastday[1].day.condition.icon}"  class="w-25 py-3" alt="">`
    tomorrowBig.innerHTML=`${r.forecast.forecastday[1].day.maxtemp_c}`
    tomorrowStatu.innerHTML=`${r.forecast.forecastday[1].day.condition.text}`
    tomorrowSmall.innerHTML=`${r.forecast.forecastday[1].day.mintemp_c}`

}


// end tomorrow
//third
async function weatherAfterTomorrow(z)
{
    let x=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fc496dd78f86408ea66131202231602&q=${z}&days=3`)
    let r=await x.json()
    let tomorrowDay=document.querySelector("#nextTomorrow #day")
    let tomorrowImg=document.querySelector("#nextTomorrow #img")
    let tomorrowBig=document.querySelector("#nextTomorrow #bigDegree")
    let tomorrowSmall=document.querySelector("#nextTomorrow #smallDegree")
    let tomorrowStatu=document.querySelector("#nextTomorrow #statu")
    
    const d = new Date(r.forecast.forecastday[2].date);
    tomorrowDay.innerHTML=`${days[d.getDay()]}`
    tomorrowImg.innerHTML=`<img src="https:${r.forecast.forecastday[2].day.condition.icon}"  class="w-25 py-3" alt="">`
    tomorrowBig.innerHTML=`${r.forecast.forecastday[2].day.maxtemp_c}`
    tomorrowStatu.innerHTML=`${r.forecast.forecastday[2].day.condition.text}`
    tomorrowSmall.innerHTML=`${r.forecast.forecastday[2].day.mintemp_c}`

}

weatherToday(city)
weatherTomorrow(city)
weatherAfterTomorrow(city)







