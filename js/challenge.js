document.addEventListener('DOMContentLoaded', function() {
  const counter = document.querySelector("#counter");
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const heart = document.querySelector("#heart");
  const pause = document.querySelector("#pause");
  const likes = document.querySelector(".likes");
  const list = document.querySelector("#list");
  const comment_form = document.querySelector("#comment-form");
  const comment_input = document.querySelector("#comment-input");
  
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
    countdown();
  });

  plus.addEventListener('click', function() {
    countup();
  });

  heart.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerHTML = display_number;
    likes.appendChild(li);
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

  comment_form.addEventListener('submit', function(e) {
    console.log(comment_input.value)
    if(comment_input.value) {
      let p = document.createElement('p');
      p.innerHTML = `@ ${comment_input.value}`;
      list.appendChild(p);
      comment_input.value = "";
    }
    e.preventDefault();
  });
});
