"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  GrooveLogger: () => GrooveLogger
});
module.exports = __toCommonJS(src_exports);

// src/Logger.ts
var import_chalk = __toESM(require("chalk"));
var import_moment = __toESM(require("moment"));
var fetchTime = (options) => {
  const momentInstance = (0, import_moment.default)().utcOffset(options.utcOffset || "+5:30");
  return momentInstance.format(options.dateFormat || "DD/MM/YYYY | hh:mm:ss");
};
var GrooveLogger = class {
  options;
  constructor(options) {
    this.options = options;
  }
  log(content) {
    const time = fetchTime(this.options);
    console.log(import_chalk.default.redBright(time) + " " + import_chalk.default.hex("#CF9FFF")("| [LOG] |") + " " + import_chalk.default.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  event(content) {
    const time = fetchTime(this.options);
    console.log(import_chalk.default.redBright(time) + " " + import_chalk.default.hex("#5ADAF1")("| [EVT] |") + " " + import_chalk.default.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  ready(content) {
    const time = fetchTime(this.options);
    console.log(import_chalk.default.redBright(time) + " " + import_chalk.default.hex("#53F00D")("| [RDY] |") + " " + import_chalk.default.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  cmd(content) {
    const time = fetchTime(this.options);
    console.log(import_chalk.default.redBright(time) + " " + import_chalk.default.hex("#6857db")("| [CMD] |") + " " + import_chalk.default.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
  error(content) {
    const time = fetchTime(this.options);
    console.log(import_chalk.default.redBright(time) + " " + import_chalk.default.redBright.bold("| [ERR] |") + " " + import_chalk.default.bgHex("#1C1A1B")("[" + this.options.scope + "] " + content));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GrooveLogger
});
