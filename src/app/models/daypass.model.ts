export class DayPass {
    cardRef: string;
    passDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}