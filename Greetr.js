(function(global, $) {

  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }
  Greetr.init = function(firstname, lastname, language) {
    
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.language = language || 'en';

  }
}(window, jQuery));