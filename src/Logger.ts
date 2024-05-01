import chalk from 'chalk';
import moment from 'moment';
import { GrooveLoggerOptions } from './utils/options';

const fetchTime = (options: GrooveLoggerOptions) => {
    const momentInstance = moment().utcOffset(options.utcOffset || "+5:30");
    return momentInstance.format(options.dateFormat || "DD/MM/YYYY | hh:mm:ss");
}

export class GrooveLogger {
    
}