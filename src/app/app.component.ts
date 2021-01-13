import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  dir = 'rtl'
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public toastController: ToastController,
    private router: Router,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.statusBar.backgroundColorByHexString('#754a8c');

      this.splashScreen.hide();
      // SplashScreen.show({
      //   showDuration: 2000,
      //   autoHide: true
      // });
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
        this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
                outlet.pop();
            } else if (
                this.router.url === '/tabs/home' ||
                this.router.url === '/tabs/appointment' ||
                this.router.url === '/tabs/profile' ||
                this.router.url === '/signin' ||
                this.router.url === '/signup-option'
            ) {
                if (
                    new Date().getTime() - this.lastTimeBackPress <
                    this.timePeriodToExit
                ) {
                    // @ts-ignore
                    navigator.app.exitApp();
                } else {
                    this.showToast();
                    this.lastTimeBackPress = new Date().getTime();
                }
            }
        });
    });
}


async showToast() {
  const toast = await this.toastController.create({
      message: 'press back again to exit App.',
      duration: 2000,
      cssClass: 'leaveToast',
  });
  toast.present();
}

}
