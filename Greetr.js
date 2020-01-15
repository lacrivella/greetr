(function(global, $) {

  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inció sesión'
  }

  Greetr.prototype = {};

  Greetr.init = function(firstname, lastname, language) {
    
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.language = language || 'en';

  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, jQuery));