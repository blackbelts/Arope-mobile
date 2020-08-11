import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelQuotationPage } from './travel-quotation.page';

describe('TravelQuotationPage', () => {
  let component: TravelQuotationPage;
  let fixture: ComponentFixture<TravelQuotationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelQuotationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelQuotationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
