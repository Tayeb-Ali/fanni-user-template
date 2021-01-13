import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RatingReviewPage } from './rating-review.page';

describe('RatingReviewPage', () => {
  let component: RatingReviewPage;
  let fixture: ComponentFixture<RatingReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingReviewPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
