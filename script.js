//this function serves the purpose of updating the time;
function updateTime(){

  //creating an instance of the 'Date' object which represents a specific point in time and provides methods for working with time.
  const time = new Date();
  
  // usint the 'Date' object's methods to distinguish our clock hands and assign each hand with specific time indicator
  const minute = time.getUTCMinutes();
  const hour = (time.getUTCHours() + 2) % 12; //rwandan time
  const second = time.getUTCSeconds();
  
  /* *Standard angles for rotation of the clock hands*:
      
      - second hand: full rotation(360deg) is completed in 60 seconds ---> 6deg/second
        
        - minute hand: full rotation is completed in 60 minutes ---> 6deg/minute 
        
        - hour hand: full rotation is completed in 12hours ---> 30deg/hour */
        
  const minuteRotation = 6 * minute;
  const hourRotation = 30 * hour;
  const secondRotation = 6 * second
  
  //we associate this rotation calculation to actual html elements which are our clock's hands
  document.querySelector('.second-hand').style.transform = `rotate(${secondRotation}deg)`;
  document.querySelector('.minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
  document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`;
}
setInterval(updateTime,1000);




