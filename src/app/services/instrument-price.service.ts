import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { startWith, switchMap } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';
import { InstrumentDetails } from '../interface/instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentPriceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';


  fetchPrices() :Observable<any> {
    return this.http.get<any>(this.url+'/getAllPrices');
  }

  getLatestCurrency(instrumentName:any) {
    return interval(2000)
            .pipe(
                startWith(0),
                switchMap(() => this.http.get(this.url+`/getLatestPrice?instrumentName=${instrumentName}`)
            )
        ) as Observable<InstrumentDetails>
  }

}
