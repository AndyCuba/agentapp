import { Injectable } from '@angular/core';

export interface RateData {
    distance: number;
    age: number;
    weight: number;
};

@Injectable()
export class RatesDataService {
    rateData?: RateData;
      
    getRates() {
        return this.rateData;
    };

    addNewRates(newRateData: RateData) {
        this.rateData = newRateData;
    };
};