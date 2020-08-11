import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePartnerPage } from './create-partner.page';

describe('CreatePartnerPage', () => {
  let component: CreatePartnerPage;
  let fixture: ComponentFixture<CreatePartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
