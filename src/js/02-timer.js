import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      document.getElementById('startButton').disabled = true;
    } else {
      document.getElementById('startButton').disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

document.getElementById('startButton').addEventListener('click', function () {
  const selectedDate = flatpickr('#datetime-picker').selectedDates[0];
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    Notiflix.Notify.warning('Please choose a date in the future');
    return;
  }

  const timeDifference = selectedDate.getTime() - currentDate.getTime();

  const intervalId = setInterval(function () {
    const timeObj = convertMs(timeDifference);
    document.querySelector('[data-days]').textContent = addLeadingZero(
      timeObj.days
    );
    document.querySelector('[data-hours]').textContent = addLeadingZero(
      timeObj.hours
    );
    document.querySelector('[data-minutes]').textContent = addLeadingZero(
      timeObj.minutes
    );
    document.querySelector('[data-seconds]').textContent = addLeadingZero(
      timeObj.seconds
    );

    timeDifference -= 1000;

    if (timeDifference < 0) {
      clearInterval(intervalId);
      document.querySelector('[data-days]').textContent = '00';
      document.querySelector('[data-hours]').textContent = '00';
      document.querySelector('[data-minutes]').textContent = '00';
      document.querySelector('[data-seconds]').textContent = '00';
      Notiflix.Notify.success('Countdown completed!');
    }
  }, 1000);
});
