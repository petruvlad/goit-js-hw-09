import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', function () {
  const dateTimePicker = flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      handleDateTimePickerClose(selectedDates);
    },
  });

  let intervalId;

  document.querySelector('[data-start]').addEventListener('click', function () {
    const selectedDate = dateTimePicker.selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }

    startCountdown(selectedDate, currentDate);
  });

  function handleDateTimePickerClose(selectedDates) {
    const startButton = document.querySelector('[data-start]');

    if (startButton) {
      const selectedDate = selectedDates[0];

      if (selectedDate && selectedDate <= new Date()) {
        Notiflix.Notify.warning('Please choose a date in the future');
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    }
  }

  function startCountdown(endDate, currentDate) {
    clearInterval(intervalId);

    intervalId = setInterval(function () {
      const timeDifference = endDate.getTime() - currentDate.getTime();
      const timeObj = convertMs(timeDifference);

      updateTimerDisplay(timeObj);

      if (timeDifference < 0) {
        clearInterval(intervalId);
        Notiflix.Notify.success('Countdown completed!');
      }

      currentDate = new Date();
    }, 1000);
  }

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

  function updateTimerDisplay(timeObj) {
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
  }

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
});
