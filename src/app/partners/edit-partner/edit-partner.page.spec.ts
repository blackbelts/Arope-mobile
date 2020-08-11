import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPartnerPage } from './edit-partner.page';

describe('EditPartnerPage', () => {
  let component: EditPartnerPage;
  let fixture: ComponentFixture<EditPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
