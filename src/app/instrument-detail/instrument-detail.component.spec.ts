import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDetailComponent } from './instrument-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('InstrumentDetailComponent', () => {
  let component: InstrumentDetailComponent;
  let fixture: ComponentFixture<InstrumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentDetailComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentDetailComponent);
    component = fixture.componentInstance;
    component.currencyItem = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
