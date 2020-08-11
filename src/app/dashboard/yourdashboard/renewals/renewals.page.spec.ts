import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenewalsPage } from './renewals.page';

describe('RenewalsPage', () => {
  let component: RenewalsPage;
  let fixture: ComponentFixture<RenewalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenewalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
