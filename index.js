function countdown(cdDate, cb) {
  // Set the date we're counting down to
  const countDownDate = new Date(cdDate).getTime();
  // Update the count down every 1 second
  const x = setInterval(() => {

    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdown = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,

      status: 1,
      message: 'COUNTINGDOWN'
    }

    // If the count down is finished, write some text 
    if (distance <= 0) {
      clearInterval(x);
      countdown.days = 0;
      countdown.hours = 0;
      countdown.minutes = 0;
      countdown.seconds = 0;

      countdown.status = 0;
      countdown.message = 'EXPIRED';
    }

    cb(countdown);
  }, 1000);
}

module.exports.countdown = countdown;