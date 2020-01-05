drawClock = (hh, mm, ss) => {
  // Prepend 0 to values
  hh = hh < 10 ? `0${hh}` : `${hh}`;
  mm = mm < 10 ? `0${mm}` : `${mm}`;
  ss = ss < 10 ? `0${ss}` : `${ss}`;

  const clock_div = document.getElementById('clock');
  clock_div.innerHTML = `#${hh}${mm}${ss}`;
  clock_div.style.backgroundColor = `#${hh}${mm}${ss}`;

  // setInterval(drawClock(), 1000);
};

window.onload = () => {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  drawClock(hh, mm, ss);

  setInterval(() => {
    ss++;
    if (ss >= 60) {
      ss = 0;
      mm++;
    }

    if (mm >= 60) {
      mm = 0;
      hh++;
    }

    if (hh >= 24) {
      hh = 0;
    }

    drawClock(hh, mm, ss);
  }, 1000);
};
