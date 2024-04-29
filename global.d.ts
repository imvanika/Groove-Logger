import { GrooveLoggerOptions } from "./src";

declare module "groove-logger" {
    export class GrooveLogger {
        private options: GrooveLoggerOptions;
        public constructor(options: GrooveLoggerOptions);
        public log(content: string): void;
        public event(content: string): void
        public ready(content: string): void
        public cmd(content: string): void
        public error(content: string): void
    }
}