import { Component } from '@angular/core';
import { RateData, RatesDataService } from 'src/app/services/ratesData.service';

@Component({
  selector: 'russianrailways',
  templateUrl: './rr.component.html',
  styleUrls: ['./rr.component.scss']
})
export class RRComponent {
    rates?: RateData;
    econom?: number;
    advanced?: number;
    luxury?: number;

    constructor(private ratesService: RatesDataService) {};

    calculateEconom(rates: RateData) {
        const { distance, age, weight } = rates;
        let price = 0;

        if(weight > 50) {
            this.econom = undefined;
            return;
        }

        if(weight > 15) price += (weight - 15) * 50;

        if(age < 5) {
            price += (distance * 0.5) / 100 * 50;
        } else {
            price += distance * 0.5;
        };

        this.econom = price;
    };

    calculateAdvanced(rates: RateData) {
        const { distance, age, weight } = rates;
        let price = 0;

        if(weight > 60) {
            this.advanced = undefined;
            return;
        };
        if(weight > 20) price += (weight - 20) * 50;

        if(age < 8) {
            price += (distance * 2) / 100 * 30;
        } else {
            price += distance * 2;
        };

        this.advanced = Math.round(price);
    };

    calculateLuxury(rates: RateData) {
        const { distance, weight } = rates;
        let price = 0;

        if(weight > 60) {
            this.luxury = undefined;
            return;
        };

        price += distance * 4;

        this.luxury = price;
    };

    ngDoCheck(){
        this.rates = this.ratesService.getRates();
        if(this.rates) {
            this.calculateEconom(this.rates);
            this.calculateAdvanced(this.rates);
            this.calculateLuxury(this.rates);
        }
    };
}