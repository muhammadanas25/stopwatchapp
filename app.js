//some are repititive some not
//setInterval repeat running settimeout after sometime

var min =0;
var sec =0 ;
var hour =0;
var msec=0;
    var interval;
//setTimeout(function(){

//learInterval(interval)
//},5000) 
//function inside 

var hourHeading = document.getElementById("hour");
var minHeading =  document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

let btnshow = document.querySelector('start')
function timer(){

    msec++
    msecHeading.innerHTML = msec ;
    if(msec>=100){
        sec++;
    secHeading.innerHTML = sec;
        msec=0;
    
    }else if(sec>=60){
        min++;
        minHeading.innerHTML = min;
        sec=0;
    }
    else if(min>=60){
        hour++;
        hourHeading.innerHTML = hour;
        min=0;
    }
    
    }
    function start(){
     interval = setInterval(timer,10) ;
    begin.setAttribute('disabled','disabled')
    }
     
    function stop(){
        clearInterval(interval)
    }
    function reset(){
        var min =0;
        var sec =0 ;
        var hour =0;
        var msec=0;
        minHeading.innerHTML=min;
        msecHeading.innerHTML=msec;
        hourHeading.innerHTML=hour;
        secHeading.innerHTML=sec;
        clearInterval(interval)
        
    }
