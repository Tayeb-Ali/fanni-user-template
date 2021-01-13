import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RatingReviewPage} from './rating-review.page';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

import {RatingReviewPageRoutingModule} from './rating-review-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RatingReviewPageRoutingModule
    ],
    declarations: [RatingReviewPage]
})
export class RatingReviewPageModule {
}
