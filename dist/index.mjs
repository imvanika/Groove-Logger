// src/Logger.ts
import chalk from "chalk";
import moment from "moment";
var fetchTime = (options) => {
  const momentInstance = moment().utcOffset(options.utcOffset || "+5:30");
  return momentInstance.format(options.dateFormat || "DD/MM/YYYY | hh:mm:ss");
};
var GrooveLogger = class {
  options;
  constructor(options) {
    this.options = options;
  }
  log(content) {
    const time = fetchTime(this.options);
    console.log(chalk.redBright(time) + " " + chalk.hex("#CF9FFF")("| [LOG] |") + " " + chalk.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  event(content) {
    const time = fetchTime(this.options);
    console.log(chalk.redBright(time) + " " + chalk.hex("#5ADAF1")("| [EVT] |") + " " + chalk.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  ready(content) {
    const time = fetchTime(this.options);
    console.log(chalk.redBright(time) + " " + chalk.hex("#53F00D")("| [RDY] |") + " " + chalk.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  cmd(content) {
    const time = fetchTime(this.options);
    console.log(chalk.redBright(time) + " " + chalk.hex("#6857db")("| [CMD] |") + " " + chalk.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  error(content) {
    const time = fetchTime(this.options);
    console.log(chalk.redBright(time) + " " + chalk.redBright.bold("| [ERR] |") + " " + chalk.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
};
export {
  GrooveLogger
};
