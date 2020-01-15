// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Roach', 'the Horse');

// using our chainable methods
g.greet().setLang('es').greet(true);

// let's use our object on the click of the login button
$('#login').click(function() {

  // creates new 'Greetr' object using function
  var loginGrtr = G$('Roach', 'the Horse');

  // hide the UI login button
  $('#logindiv').hide();

  // set language based on what's chosen in the select box
  // chain a method that updates the h1 (formal because true)
  // log to console
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});