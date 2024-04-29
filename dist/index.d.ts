interface GrooveLoggerOptions {
    scope: string;
    utcOffset?: string;
    dateFormat?: string;
}

declare class GrooveLogger {
    private options;
    constructor(options: GrooveLoggerOptions);
    log(content: string): void;
    event(content: string): void;
    ready(content: string): void;
    cmd(content: string): void;
    error(content: string): void;
}

export { GrooveLogger, type GrooveLoggerOptions };
