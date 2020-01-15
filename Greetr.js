(function(global, $) {

  // 'new' an object
  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  // looger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inció sesión'
  };

  // prototype that holds methods to save on memory space
  Greetr.prototype = {

    // 'this' refers to the calling object at execution time
    fullName: function() {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function() {
      // checks to see if language is valid
      // references the externally inaccessible 'supportLangs' from closure
      if(supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // chainable methods that return their own contain object
    greet: function(formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if(formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if(console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      // makes chainable
      return this;
    },

    setLang: function(lang) {
      // set the language
      this.language = lang;

      // validate
      this.validate();

      // make chainable
      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if(!$) {
        throw 'jQuery not loaded';
      }
      if(!selector) {
        throw 'Missing jQuery selector';
      }

      // determines the message
      var msg;
      if(formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).html(msg);

      // makes it chainable
      return this;
    }

  };

  // the actual object is created HERE, thus allowing us to 'new' an object without calling 'new'
  Greetr.init = function(firstname, lastname, language) {
    
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.language = language || 'en';

    this.validate();

  }

  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  // attach our Greetr to the global object, and provide a shorthand '$G'
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));