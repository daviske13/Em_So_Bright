// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const currentDate = dayjs().format

$(function () {
  // Current hour
  const currentHour = dayjs().hour();


  //Save Buttons
  $('.saveBtn').on('click', function() {
    const id = $(this).closest('.time-block').attr('id');

    const userInput = $(this).siblings('.description').val();

    localStorage.setItem(id, userInput);
  });

  // Past, Present, Future
  $('.time-block').each(function() {
    const hour = parseInt($(this).attr('id').split('-')[1]);
    if (hour < currentHour) {
      $(this).addClass('past').removeClass('present future');
    } else if (hour === currentHour) {
      $(this).addClass('present').removeClass('past future');
    } else {
      $(this).addClass('future').removeClass('past present');
    }
  });

  $('.time-block').each(function() {
    const id = $(this).attr('id');
    const userInput = localStorage.getItem(id);
    $(this).find('.description').val(userInput);
  });

  // Display current date
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
