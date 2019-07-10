var passing = function() {
  if (typeof $ !== 'undefined' || typeof jQuery !== 'undefined') {
    
    // add the overlay
    $('body').append('<div id="passingOverlay" class="overlayAll"><h2 class="message"/></div>');

    class PassingMessage {
      constructor() {
        this.defaultMessage = "Hello world !";
        this.message = "";
        this.afterNotification = null;
      }

      /*
      provide a custom notification message
    */
      setMessage(message) {
        // display the default message
        // if the custom message is not set
        if (message == "") {
          this.message = this.defaultMessage;

          // display the custom message
        } else {
          this.message = message;
        }

        // replace the text of the element
        // displaying the message
        $("#passingOverlay .message").text(this.message);
      }

      /*
      when the display is over, maybe you want 
      to do a specific action
    */
      setAfterNotification(func) {
        this.afterNotification = func;
      }

      /*
      Triggers the notification animation
    */
      notify() {
        var duration, durationSec;
        var athis = this;

        // wait a bit of time then display
        setTimeout(function() {
          $("#passingOverlay").addClass("displayed");
          $("#passingOverlay").addClass("revealed");

          // get the duration regarding the
          // CSS to adapt to the fade out
          duration = $("#passingOverlay .message").css("transition-duration");
          durationSec = /^(.*)s$/.exec(duration)[1];

          setTimeout(function() {
            $("#passingOverlay").removeClass("revealed");

            setTimeout(function() {
              $("#passingOverlay").removeClass("displayed");

              if (athis.afterNotification != null) {
                athis.afterNotification();
              }
            }, 500);
          }, durationSec * 1000);
        }, 50);
      }
    }
    return new PassingMessage();
  } else {
    throw 'PassingMessage Lib. Cannot work without jQuery !'
  }
}.call(this);
