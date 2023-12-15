function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
  let intervalId;

  document.getElementById('startButton').addEventListener('click', function () {
    // Dezactivează butonul "Start" și activează butonul "Stop"
    this.disabled = true;
    document.getElementById('stopButton').disabled = false;

    // Schimbă culoarea de fundal la fiecare secundă
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

  document.getElementById('stopButton').addEventListener('click', function () {
    // Activează butonul "Start" și dezactivează butonul "Stop"
    document.getElementById('startButton').disabled = false;
    this.disabled = true;

    // Oprește schimbarea culorii de fundal
    clearInterval(intervalId);
  });
});
