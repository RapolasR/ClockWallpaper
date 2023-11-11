let hrs_T = document.getElementById('hrs');
let min_T = document.getElementById('min');
let sec_T = document.getElementById('sec');

function Clock(){
    
    let currentTime = new Date();
    
    let hrs_C = currentTime.getHours();
    let min_C = currentTime.getMinutes();
    let sec_C = currentTime.getSeconds();
    
    hrs_T.innerHTML=hrs_C;
    min_T.innerHTML=min_C;
    sec_T.innerHTML=sec_C;
    
    
    
    setTimeout(Clock, 1000);
    
}

Clock();