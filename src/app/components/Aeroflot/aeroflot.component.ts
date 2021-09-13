import { Component } from '@angular/core';
import { RateData, RatesDataService } from 'src/app/services/ratesData.service';

@Component({
  selector: 'aeroflot',
  templateUrl: './aeroflot.component.html',
  styleUrls: ['./aeroflot.component.scss']
})
export class AeroflotComponent {
    rates?: RateData;
    econom?: number;
    advanced?: number;
    luxury?: number;

    constructor(private ratesService: RatesDataService) {};

    calculateEconom(rates: RateData) {
        const { distance, weight } = rates;
        let price = 0;

        if(weight > 20) {
            this.econom = undefined;
            return;
        }

        if(weight > 5) price += 4000;

        price += distance * 4;

        this.econom = price;
    };

    calculateAdvanced(rates: RateData) {
        const { distance, age, weight } = rates;
        let price = 0;

        if(weight > 50) {
            this.advanced = undefined;
            return;
        }

        if(weight > 20) price += 5000;

        if(age < 7) {
            price += (distance * 8) / 100 * 30;
        } else {
            price += distance * 8;
        };

        this.advanced = Math.round(price);
    };

    calculateLuxury(rates: RateData) {
        const { distance, age, weight } = rates;
        let price = 0;

        if(weight > 50) {
            this.rates = undefined;
            return;
        }

        if(age < 16) {
            price += (distance * 15) / 100 * 30;
        } else {
            price += distance * 15;
        };

        this.luxury = Math.round(price);
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