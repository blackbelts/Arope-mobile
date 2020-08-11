import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowPartnerPage } from './show-partner.page';

describe('ShowPartnerPage', () => {
  let component: ShowPartnerPage;
  let fixture: ComponentFixture<ShowPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
