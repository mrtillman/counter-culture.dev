const ThanksVM = require("./thanks.vm");

class ErrorVM extends ThanksVM {
  constructor() {
    super();
    this.title = `Error | Counter-Culture`;
    this.subtitle = "Oops!";
    this.message = "An error has occurred.";
    this.statusCode = null;
    this.eventId = null;
  }
}

module.exports = ErrorVM;
