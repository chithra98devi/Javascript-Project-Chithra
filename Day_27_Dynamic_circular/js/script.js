const container = document.querySelector(".container");

const courses = [
  { course: "HTML", percent: 99, color: "#f9ca24" },
  { course: "CSS", percent: 65, color: "#78e08f" },
  { course: "JavaScript", percent: 35, color: "#c56cf0" },
  { course: "Bootstrap", percent: 85, color: "#badc58" },
];

courses.forEach((course) => {
  // background: conic-gradient(red 360deg, #fff 0deg);
  container.innerHTML += `<div class="progress-group">
  <div class="circular-progress" ">
    <span class="progressValue" style="color:${course.color}">${course.percent}%</span>
  </div>
  <label class="text" style="color:${course.color}">${course.course}</label>
</div>`;
});
//style="background: conic-gradient(${course.color } ${3.6 * course.percent}deg, #fff 0deg)
const progressGroup = document.querySelectorAll(".progress-group");

progressGroup.forEach((progress, index) => {
  let progressStartValue = 0;
  let progressEndValue = courses[index].percent;
  let speed = 50;
  let progessTimer = setInterval(() => {
    progressStartValue++;
    if (progressStartValue == progressEndValue) {
      clearInterval(progessTimer);
    }
    progress.querySelector(
      ".circular-progress"
    ).style.background = `conic-gradient(${courses[index].color} ${
      3.6 * progressStartValue
    }deg, #fff 0deg)`;
    progress.querySelector(".progressValue").innerHTML =
      progressStartValue + "%";
  }, speed);
});
