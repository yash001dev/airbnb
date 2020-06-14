import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferBokkingsPage } from './offer-bokkings.page';

describe('OfferBokkingsPage', () => {
  let component: OfferBokkingsPage;
  let fixture: ComponentFixture<OfferBokkingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBokkingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferBokkingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
