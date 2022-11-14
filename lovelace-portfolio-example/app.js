const timeContainer = document.getElementById('time-container');
const BIRTH_DAY = '12-10-1815';
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const NUM_FORMAT = 'en-GB'
const intlNumberFormatter = new Intl.NumberFormat(NUM_FORMAT);

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    // (Line below) by default, the time difference is measured in miliseconds.
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);