import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RatingReviewPage} from './rating-review.page';

const routes: Routes = [
    {
        path: '',
        component: RatingReviewPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RatingReviewPageRoutingModule {
}
