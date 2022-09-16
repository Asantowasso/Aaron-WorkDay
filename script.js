var timeDisplayEl = $('#show-time');


function displayTime() {
var nowTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
timeDisplayEl.text(nowTime)
}

setInterval(displayTime, 1000);