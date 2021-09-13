import { Component } from '@angular/core';
import { RatesDataService } from 'src/app/services/ratesData.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
    distance: string = '';
    age: string = '';
    weight: string = '';

    constructor(private ratesService: RatesDataService){};

    sendRates() {
        const newRates = {
            distance: Number(this.distance),
            age: Number(this.age),
            weight: Number(this.weight)
        };

        this.ratesService.addNewRates(newRates);
    };
}