var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("p-active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
}

//referred to https://dev.to/stackfindover/how-to-create-a-stopwatch-in-javascript-57a8

const watch = document.querySelector("#a-stopwatch")
let millisecond = 0;
let timer;

function timeStart(){
  clearInterval(timer);
  timer = setInterval(() => {
    millisecond += 10;

    let dateTimer = new Date(millisecond);

    watch.innerHTML = 
    ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
  }, 10);
}

function timePaused() {
  clearInterval(timer);
}

function timeReset(){
  setInterval(timer)
  millisecond = 0;
  watch.innerHTML = "00:00:00";
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if(el.id === 'start') timeStart();
  if(el.id === 'pause') timePaused();
  if(el.id === 'reset') timeReset();
})