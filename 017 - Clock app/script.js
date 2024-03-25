const btnPanel = document.querySelector(".btn-panel");
const panel = document.querySelector(".panel");
const clockContainer = document.querySelector(".clock");
const btnPanelText = document.querySelector(".btn-text");
const btnPanelIcon = document.querySelector(".btn-icon");

let isPanelOpen = false;

btnPanel.addEventListener("click", (e) => {
  if (isPanelOpen) {
    isPanelOpen = false;
    btnPanelText.textContent = "MORE";
    panel.style.transform = "translateY(100%)";
    clockContainer.style.transform = "translateY(100%)";
    btnPanelIcon.style.transform = "rotate(0deg)";
  } else {
    isPanelOpen = true;
    btnPanelText.textContent = "LESS";
    panel.style.transform = "translateY(0)";
    clockContainer.style.transform = "translateY(0)";
    btnPanelIcon.style.transform = "rotate(180deg)";
  }
});

const clockTime = document.querySelector(".clock-time");
const locationText = document.querySelector(".location");
const panelCurrentTimezone = document.querySelector(".location");
const panelDayOfYear = document.querySelector(
  ".panel .left .panel-item:nth-child(2) .panel-text"
);
const panelDayOfWeek = document.querySelector(
  ".panel .right .panel-item .panel-text"
);
const panelWeekNumber = document.querySelector(
  ".panel .right .panel-item:nth-child(2) .panel-text"
);

const updateClock = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  clockTime.textContent = `${hours}:${minutes}`;

  updatePanelInformation(now);
};

const updatePanelInformation = (now) => {
  const dayOfYear = Math.floor(
    (now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  const dayOfWeek = now.getDay() + 1;
  const weekNumber = getWeekNumber(now);

  locationText.textContent = 
    Intl.DateTimeFormat().resolvedOptions().timeZone;
  panelDayOfYear.textContent = dayOfYear;
  panelDayOfWeek.textContent = dayOfWeek;
  panelWeekNumber.textContent = weekNumber;
};

const getWeekNumber = (d) => {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

  return weekNo;
};

setInterval(updateClock, 1000);

updateClock();
