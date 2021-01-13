import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProposeComponent } from 'src/app/Components/propose/propose.component';

@Component({
  selector: 'app-appoinment-details',
  templateUrl: './appoinment-details.page.html',
  styleUrls: ['./appoinment-details.page.scss'],
})
export class AppoinmentDetailsPage implements OnInit {
  tabButton = 'main';
  data:any;
  ProposeResult:any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    // this.data = [
    //   {}
    // ]
  }

  tabs(){
    switch (this.tabButton) {
      case 'main':
        break;

      case 'problem':
        break;
    }
  }

  async sendPropose(){    
      const modal = await this.modalCtrl.create({
          component: ProposeComponent,
          backdropDismiss: false,
          cssClass: 'propose-modal1',
      });
      modal.onDidDismiss().then((data) => {
          this.ProposeResult = data;
          console.log(' this.type: ', this.ProposeResult);
          if (data.data !== undefined) {
          }
      });
      return await modal.present();
  }

}
