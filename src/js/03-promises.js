document.addEventListener('DOMContentLoaded', function () {
  const promiseForm = document.querySelector('.form');

  promiseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const delay = parseInt(promiseForm.elements.delay.value, 10);
    const step = parseInt(promiseForm.elements.step.value, 10);
    const amount = parseInt(promiseForm.elements.amount.value, 10);

    createPromises(amount, delay, step)
      .then(() => {
        console.log('All promises fulfilled successfully');
      })
      .catch(() => {
        console.error('At least one promise was rejected');
      });
  });

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  function createPromises(amount, initialDelay, step) {
    const promises = [];

    for (let i = 1; i <= amount; i++) {
      const position = i;
      const promiseDelay = initialDelay + (i - 1) * step;

      promises.push(
        createPromise(position, promiseDelay)
          .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          })
      );
    }

    return Promise.all(promises);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const promiseForm = document.querySelector('.form');

  promiseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(promiseForm.elements.delay.value, 10);
    const step = parseInt(promiseForm.elements.step.value, 10);
    const amount = parseInt(promiseForm.elements.amount.value, 10);

    createPromises(amount, delay, step)
      .then(() => {
        console.log('All promises fulfilled successfully');
      })
      .catch(() => {
        console.error('At least one promise was rejected');
      });
  });

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  function createPromises(amount, initialDelay, step) {
    const promises = [];

    for (let i = 1; i <= amount; i++) {
      const position = i;
      const promiseDelay = initialDelay + (i - 1) * step;

      promises.push(
        createPromise(position, promiseDelay)
          .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          })
      );
    }

    return Promise.all(promises);
  }
});

