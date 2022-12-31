import { Component, OnInit } from '@angular/core';
import { InstrumentPriceService } from './services/instrument-price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FX-Price-Ticker';
  items: any;

  constructor(private instrumentPriceService:InstrumentPriceService){}

  ngOnInit() {
    this.instrumentPriceService.fetchPrices().subscribe(currencyData=>{
      this.items = currencyData;
    });
  }

}
