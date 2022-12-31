import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { InstrumentPriceService } from '../services/instrument-price.service';

@Component({
  selector: '[app-instrument-detail]',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.css']
})
export class InstrumentDetailComponent {
  @Input() currencyItem:any;
  private unsubscribe = new Subject();

  constructor( private instrumentPriceService:InstrumentPriceService ){}

  ngOnInit() {
      this.getLatestInstrumentValues();
  }

  getLatestInstrumentValues() {
      this.instrumentPriceService.getLatestCurrency(this.currencyItem.instrumentName).pipe(takeUntil(this.unsubscribe)).subscribe((data)=>{
        this.currencyItem.bid = data.bid;
        this.currencyItem.ask = data.ask;
        this.currencyItem.timestamp = data.timestamp;
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next('');
    this.unsubscribe.complete();
  }

}
