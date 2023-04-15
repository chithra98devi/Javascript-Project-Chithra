const clock = document.querySelector(".clock");
function runClock() {
  var time = new Date();
  var hrs = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var txt = "AM";

  if (hrs > 12) {
    hrs = hrs - 12;
    txt = "PM";
  } else if (hrs == 0) {
    hrs = 12;
    txt = "AM";
  } else if (hrs == 12) {
    txt = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.innerHTML = `${hrs} : ${minutes}: ${seconds} : ${txt}`;
  // console.log(`${hrs} : ${minutes}: ${seconds}`);
}

setInterval(runClock, 1000);
