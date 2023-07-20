window.onload=function(){
    //set initial timer value to zero
    let hours=0;
    let minutes=0;
    let sec=0;
    let miliSec=0;

    // select timer
    let appendHours=document.querySelector('#hours');
    let appendMinutes=document.querySelector('#minutes');
    let appendSec=document.querySelector('#sec');
    let appendMiliSec=document.querySelector('#miliSec');
    
    //selelct buttons
    let startBtn=document.querySelector('#start');
    let stopBtn=document.querySelector('#stop');
    let resetBtn=document.querySelector('#reset');
    let lapBtn=document.querySelector('#lap');
    let interval;

    // Select lap list
    let lapList = document.querySelector('#lap-list');

    // create empty array for storing lap times
    let lapTimes = [];

    //intialise lap count zero
    let lapCount = 0;


    //code for timer
    const startTimer=()=>{
        //miliSec conditions
        miliSec++;
        if(miliSec<=9){  
            appendMiliSec.innerHTML='0' + miliSec;
        }
        
        if(miliSec>9){
            appendMiliSec.innerHTML=miliSec;
        }

        // Increment seconds and reset milliseconds
        if(miliSec>99){  //after mili-sec=99 sec inreased by 1
            sec++;
            appendSec.innerHTML='0' + sec;
            miliSec=0; //and reset mili sec to zero 
            appendMiliSec.innerHTML='00';
        }

        if(sec>9){
            appendSec.innerHTML=sec;
        }

         // Increment minutes and reset seconds
        if(sec>59){
            minutes++;
            appendMinutes.innerHTML='0'+ minutes;
            sec=0;
            appendSec.innerHTML='00';
        }
        if(minutes>9){
            appendMinutes.innerHTML=minutes;
        }

        // Increment hours and reset minutes
        if(minutes>59){
            hours++;
            appendHours.innerHTML='0'+hours;
            minutes=0;
            appendMinutes.innerHTML='00';
        }

        if(hours>9){
            appendHours.innerHTML=hours;
        }

    };

    //start button code
    startBtn.addEventListener('click',()=>{ 
        clearInterval(interval);
        interval=setInterval(startTimer,10);
    });

    //stop button code
    stopBtn.addEventListener('click',()=>{
        clearInterval(interval);
    });

    //reset button code
    resetBtn.addEventListener('click',()=>{
        clearInterval(interval);
        //reset timer
        hours='00';
        minutes='00';
        sec='00';
        miliSec='00';

        appendMiliSec.innerHTML=miliSec;
        appendSec.innerHTML=sec;
        appendMinutes.innerHTML=minutes;
        appendHours.innerHTML=hours;

        //reset lap
        lapTimes = [];
        lapList.innerHTML = '';
        lapCount=0;
        lapsContainer.style.display = 'none';
    });

    //lap Button code
    lapBtn.addEventListener('click', () => {
        lapCount++;
        // Display the current timer value in the format HH:MM:SS:mm
        let currentTime = `${lapCount}- ${appendHours.innerHTML}:${appendMinutes.innerHTML}:${appendSec.innerHTML}.${appendMiliSec.innerHTML}`;
    
        // Create a new lap list item for each lap time and append it to the lap list
        let lapItem = document.createElement('li');
        lapItem.textContent = currentTime;
        lapList.appendChild(lapItem);
    
        // Store the lap time in the lapTimes array
        lapTimes.push(currentTime);
        // Show the lap times container
        lapsContainer.style.display = 'block';
      });
    

};