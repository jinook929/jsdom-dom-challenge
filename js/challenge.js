document.addEventListener('DOMContentLoaded', function() {
  const counter = document.querySelector("#counter");
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const heart = document.querySelector("#heart");
  const pause = document.querySelector("#pause");
  
  let display_number = 0;
  let timer = window.setInterval(countup, 1000);
  function countup() {
    display_number++;
    counter.innerHTML = display_number;
  }

  function countdown() {
    display_number--;
    counter.innerHTML = display_number;
  }

  minus.addEventListener('click', function() {
    countdown()
  });

  plus.addEventListener('click', function() {
    countup()
  });

  let timerOn = true;
  pause.addEventListener('click', function() {
    if(timerOn) {
      window.clearInterval(timer);
      pause.innerHTML = "resume";
      timerOn = false
    } else {
      timer = window.setInterval(countup, 1000);
      pause.innerHTML = "pause";
      timerOn = true;
    }
  });

});
