
console.log("object");

let days=document.getElementById("days");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

let  endDate="31 jan 2024 05:19 PM";
let count;
function countDown(){

    let end=new Date(endDate);
    let now=new Date();
    let diff=(end-now)/1000;
    count=diff;
    if(count<=0){
        clearInterval(a);
        return;
    }
    let d=Math.floor(diff/(60*60*24))
    let hr=Math.floor((diff/(60*60))%24)
    let min=Math.floor((diff/60)%60);
    let sec=Math.floor(diff%60)
    console.log(d,hr,min,sec);

    if(sec<10){
        seconds.innerHTML="0"+sec;
    }
    else{
        seconds.innerHTML =sec;
    }
    if(min<10){
        minutes.innerHTML="0"+min;
    }
    else{
        minutes.innerHTML=min;
    }
    if(hr<10){
        hours.innerHTML="0"+hr;
    }
    else{
        hours.innerHTML=hr;
    }
    if(d<10){
        days.innerHTML="00"+d;
    }
    else if(d>=10 && d<100){
        days.innerHTML="0"+d;
    }
    else{
        days.innerHTML=d;
    }

    
}
 let a=setInterval(()=>{
    countDown();

},1000)
