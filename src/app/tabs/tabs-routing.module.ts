import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../Pages/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'rating-review',
                loadChildren: () => import('../Pages/rating-review/rating-review.module').then(m => m.RatingReviewPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../Pages/profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'notifications',
                loadChildren: () => import('../Pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
            },

            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
