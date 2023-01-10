const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");
  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if(formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
  }
  else {
    formatSwitchBtn.setAttribute("data-format", "12");
  }
})

function clock() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  let period = "АМ";

  if(hours >= 12) {
    period = "ПМ";
  }

  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if(formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  }

  if(hours < 10) {
    hours = "0" + hours;
  }

  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  if(seconds < 10) {
    seconds = "0" + seconds;
  }
  
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday: "long"});
const monthName = today.toLocaleString("default", {month: "short"});

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;

const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if(e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});

const formatClockBtn = document.querySelector(".format-clock-btn");
const digitalClock = document.querySelector(".digital-clock");
const analogClock = document.querySelector(".analog-clock");
formatClockBtn.addEventListener("click", () => {
  formatClockBtn.classList.toggle("active");
  digitalClock.classList.toggle("active");
  analogClock.classList.toggle("active");
});

/*--------------------------------------------------------*/

function setClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hrValue = (hours * 30) + (minutes * 6) /12;
  minValue = minutes * 6;
  secValue = seconds * 6;

  document.querySelector(".hr-hand").style.transform = "rotate(" + hrValue + "deg)";
  document.querySelector(".min-hand").style.transform = "rotate(" + minValue + "deg)";
  document.querySelector(".sec-hand").style.transform = "rotate(" + secValue + "deg)";
};

setInterval(setClock, 1000);