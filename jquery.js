$(document).ready(function () {
  ///////Before the function start, render the p tag based on the local storage////
  //////Loop all local storage////

  function renderMessageFromLocalStorage(item) {
    for (var i = 0; i < 15; i++) {
      let storageMessage = localStorage.getItem(localStorage.key(i));

      function appendMessage() {
        if ($(this).attr("id") === localStorage.key(i)) {
          $(this).children(".reminder").text(storageMessage);
        }
      }

      $("li").each(appendMessage);
    }
  }

  renderMessageFromLocalStorage();

  ///////////////////////////////////////////////////////

  /////Change Colour According to the Time////

  //Change the class of the li depends on the time//

  //Class: Past, Present, Future//

  function renderColour(item) {
    let hourInNumber = parseInt(moment().format("H"));
    console.log($(this).attr("id"));

    if (parseInt($(this).attr("id")) < hourInNumber) {
      $(this).removeClass();
      $(this).addClass("past");
    } else if (parseInt($(this).attr("id")) == hourInNumber) {
      $(this).removeClass();
      $(this).addClass("present");
    } else if (parseInt($(this).attr("id")) > hourInNumber) {
      $(this).removeClass();
      $(this).addClass("future");
    } else {
      console.log("I can not even right now...");
    }
  }

  //////////////////////////

  //////////Time Control Unit////////////////
  //This function render the Time and Date
  function renderTimeandDate() {
    //console.log(parseInt(moment().format("h")));

    let latestDateAndTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");

    $("#currentDay").text(latestDateAndTime);
  }

  //This function refresh the time and date every second to create a real-time clock
  function refreshTimeandDate() {
    timerIntervalTimeandDate = setInterval(renderTimeandDate, 1000);
    timerIntervalColour = ($("li").each(renderColour), 1000);
  }
  renderTimeandDate();
  refreshTimeandDate();
  ////////////////////////////////////////////////////////////////////////////

  ///////////This function hide and unhide the input bar so you can type your message////

  function unhiddenInput(item) {
    if ($(this).children("li input").css("display") === "none") {
      console.log("was");
      this.inputHidden = false;
      $(this).children("li .reminder").css("display", "none");

      $(this).children("li input").css("display", "block");
    } else {
      console.log(this);
      this.inputHidden = true;
      $(this).children("li .reminder").css("display", "block");
      $(this).children("li input").css("display", "none");
    }
  }

  function inputStopPropagation(item) {
    event.stopPropagation();
  }

  $("#timeblock li").click(unhiddenInput);
  $("#timeblock input").click(inputStopPropagation);

  ///////////////////////////////////////////////////////

  ////Function assigned to the save button

  function saveMessageToLocalStorage(item) {
    event.stopPropagation();
    let localStorageMessage = $(this).siblings("input").val();
    let inputbarParentID = $(this).parent().attr("id");
    localStorage.setItem(inputbarParentID, localStorageMessage);
    $(this).siblings(".reminder").text(localStorageMessage);
  }

  $("#timeblock button").click(saveMessageToLocalStorage);
});
