
function yearInput(year) {
  if((year % 4 === 0 || year % 400 === 0) && year % 100 !== 0) {
    return true;
  }else {
    return false;
  }
  // if(year % 4 > 0 || year % 100 === 0) {
  //   return false;
  // }else if (year % 4 === 0 || year % 400 === 0) {
  //   return true;
  // }
}


//front-end development here
$(document).ready(function() {
  $("form#leapYear").submit(function(event) {
    event.preventDefault();
    $("#output").text(yearInput(parseInt($("#year").val())));
  })

})
