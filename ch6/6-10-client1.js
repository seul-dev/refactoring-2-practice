import { acquireReading, enrichReading } from './6-10.js';

const rawReading = acquireReading();
const reading = enrichReading(rawReading);

const baseCharge = reading.baseCharge;
console.log(baseCharge);
