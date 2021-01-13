import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestServicesPage } from './request-services.page';

describe('RequestServicesPage', () => {
  let component: RequestServicesPage;
  let fixture: ComponentFixture<RequestServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
