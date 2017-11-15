export class Topup {
    cardRef: string;
    amount: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}