// current day displayed in header using id=currentDay.

// each time block is color coded to show if it is past(grey), present(red), future(green).

// example: current time is red(present), if current time is 11am everything before 11am is grey(past). else everything after 11am is green(future).

// when clicking on time block enter inpur from user.
// save input to local storage when save button is clicked(when refreshed info is not erased).


// get items from local storage and set them to variables
var textareaVal9 = localStorage.getItem("hr-9");
var textareaVal10 = localStorage.getItem("hr-10");
var textareaVal11 = localStorage.getItem("hr-11");
var textareaVal12 = localStorage.getItem("hr-12");
var textareaVal1 = localStorage.getItem("hr-1");
var textareaVal2 = localStorage.getItem("hr-2");
var textareaVal3 = localStorage.getItem("hr-3");
var textareaVal4 = localStorage.getItem("hr-4");
var textareaVal5 = localStorage.getItem("hr-5");

// assign id's to variables
var textarea9 = $("#hr-9");
var textarea10 = $("#hr-10");
var textarea11 = $("#hr-11");
var textarea12 = $("#hr-12");
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");

// the values from local storage are displayed in the textarea by using id variables
textarea9.val(textareaVal19);
textarea10.val(textareaVal10);
textarea11.val(textareaVal11);
textarea12.val(textareaVal12);
textarea1.val(textareaVal1);
textarea2.val(textareaVal2);
textarea3.val(textareaVal3);
textarea4.val(textareaVal4);
textarea5.val(textareaVal5);

// variable "date" holds current date.
var date = moment().format("dddd, MMM Do, YYYY");

// display date in currentDay id
$("#currentDay").text(date);

// time function
function time() {

    // variable "currentHour" holds current hour.
    var currentHour = moment().hours();

    // function for each class block to determine is past, present, or future
    $(".block").each(function () }

          // variable "hour" holds id hour from class block and pareInt is used to change it from a string to an integer.
          var hour = parseInt($(this).attr("id"));

          // if statement to determine if its in the past hour's
          if (hour < currentHour) {
            // adds grey to blocks
            $(this).addClass("past");
          }

          // else if statement to determine if in the present hour
          else if (hour === currentHour) {
            // removes grey to blocks
            $(this).removeClass("past");
            // adds red to blocks
            $(this).addClass("present");
          }

          // else statement to determine if in the future's
          else {
            // removes grey to blocks
            $(this).removeClass("past");
            // removed red to blocks
            $(this).removeClass("present");
            // adds green to blocks
            $(this).addClass("future");
          }

// call the funtion time()
time();

// on click function
$(".saveButton").on("click", function (event) {
    // prevents refresh when saveButton is clicked
    event.preventDefault();

    // variable "textarea" holds the previous sibling of saveButton which is (textarea).
    var textarea = $(this).prev();

    // variable "id" holds (sets variable textarea to its id)
    var id = textarea.attr("id");

    // variable "value" holds (the value of textarea)
    var value = textarea.val();
    // sets items id and value in local storage
    localStorage.setItem(id, value);
});
