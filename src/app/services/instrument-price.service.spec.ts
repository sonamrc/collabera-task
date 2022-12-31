import { TestBed } from '@angular/core/testing';

import { InstrumentPriceService } from './instrument-price.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('InstrumentPriceService', () => {
  let service: InstrumentPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          HttpClientModule
        ],
    });
    service = TestBed.inject(InstrumentPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
