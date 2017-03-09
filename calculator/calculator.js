

add = function(a, b) {
  return a + b;
}

multiply = function(a, b) {
  return a * b;
}

divide = function(a, b) {
  return a / b;
}

subtract = function(a, b) {
  return a - b;
}


var clear_all = function() {
  memory_number = '';
  display_number = '';
  operator = '';
  $("#display").empty();
}

var calculate = function(num_one, num_two, operator) {
  return window[operator](Number(num_one), Number(num_two))
}

var calculate_and_display = function(num_one, num_two, operator) {
  answer = "" + calculate(num_one, num_two, operator);
  $("#display").text(answer);
  display_number = answer;
}

var memory_number = '';
var display_number = '';
var operator;
var answer;

$(document).ready(function() {

  $('.number').click(function(event){
    display_number += event.target.textContent;
    $('#display').text(display_number);
  })

  $('.operator').click(function(event){
    var answer;

    if(memory_number.length && display_number.length) {
      calculate_and_display(memory_number, display_number, operator);
    }

    if(display_number.length){
      memory_number = display_number; 
    }
    display_number = ''; 
    operator = event.target.id;
  });

  $('#clear').click(clear_all);

  $('#equals').click(function() {
    calculate_and_display(memory_number, display_number, operator)
    memory_number = display_number;
    operator = '';
    display_number = '';

  });

});

