const { GrooveLogger } = require("../dist");

const logger = new GrooveLogger({
  scope: "TestApp",
  utcOffset: "+5:30",
  dateFormat: "DD/MM/YYYY | hh:mm:ss",
});


logger.log("This is a log message");
logger.event("This is an event message");
logger.ready("This is a ready message");
logger.cmd("This is a cmd message");
logger.error("This is an error message");
