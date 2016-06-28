function StopWatch(callback) {
  this._time = 0
  this._interval = null
  this._delay = 10
  this._callback = callback

  this.start = function () { // start the watch
    if (this._interval) { return }
    this._interval = setInterval(this.addTime.bind(this), this._delay)
  }

  this.stop = function () { // stop the watch
    clearInterval(this._interval)
    this._interval = null
  }

  this.addTime = function () { // add time to the counter
    this._time += this._delay
    this._callback(this._time)
  }

  this.reset = function () {
    this._time = 0
    this._callback(this._time)
  }
}

// add code here
$(document).ready(function() {
  console.log("Hi")

  var container1 = $('#sw1')
  var display1 = container1.children('.display')
  var buttons1 = container1.children('button.stopWatch')
  var stopwatch1 = new StopWatch(function (newTime) {
    // update the display
    display1.text(msToTime(newTime))
  })

  buttons1.on('click', function(event) {
    event.preventDefault()

    // which button did i click
    var button = $(this)
    if (button.hasClass('start')) { // start the stopwatch
      stopwatch1.start()
    } else if (button.hasClass('stop')) { // stop the stopwatch1
      stopwatch1.stop()
    } else {
      stopwatch1.stop()
      stopwatch1.reset()
    }
  })

  var container2 = $('#sw2')
  var display2 = container2.children('.display')
  var buttons2 = container2.children('button.stopWatch')
  var stopwatch2 = new StopWatch(function (newTime) {
    // update the display
    display2.text(msToTime(newTime))
  })

  buttons2.on('click', function(event) {
    event.preventDefault()

    // which button did i click
    var button = $(this)
    if (button.hasClass('start')) { // start the stopwatch
      stopwatch2.start()
    } else if (button.hasClass('stop')) { // stop the stopwatch2
      stopwatch2.stop()
    } else {
      stopwatch2.stop()
      stopwatch2.reset()
    }
  })

  // converts milliseconds to friendlier time
  function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
      , seconds = parseInt((duration/1000)%60)
      , minutes = parseInt((duration/(1000*60))%60)
      , hours = parseInt((duration/(1000*60*60))%24)

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds
  }

})
