import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourdashboardPage } from './yourdashboard.page';

describe('YourdashboardPage', () => {
  let component: YourdashboardPage;
  let fixture: ComponentFixture<YourdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
