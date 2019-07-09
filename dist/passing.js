var passing = (function() {
  class PassingMessage {
    constructor() {}
    notify() {
      var duration, durationSec;
      setTimeout(function() {
        return $("#passingOverlay").addClass("displayed");
      }, 50);

      $("#passingOverlay").addClass("revealed");
      duration = $("#passingOverlay .message").css("transition-duration");
      durationSec = /^(.*)s$/.exec(duration)[1];
      setTimeout(function() {
        $("#passingOverlay").removeClass("revealed");
        return setTimeout(function() {
          return $("#passingOverlay").removeClass("displayed");
        }, 500);
      }, durationSec * 1000);
    }
  }
  return new PassingMessage();
}.call(this));