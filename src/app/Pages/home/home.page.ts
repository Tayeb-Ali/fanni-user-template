import { Component } from '@angular/core';
import { NavController } from "@ionic/angular"
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  // @ViewChild("button", { read: ElementRef, static: true }) button: ElementRef
  // @ViewChildren('ion-item', { read: ElementRef }) items: QueryList<ElementRef>;

  appoinmentbutton: any = 'new';
  data: any;
  animateAppoinment = 'animate__bounceIn'
  constructor(private dataShareService: DataShareService,
    public navController: NavController) {

    this.data = [
      { id: 1, title: 'كهرباء', logo: 'idea.svg' },
      { id: 2, title: 'اجهزة', logo: 'device.svg' },
      { id: 3, title: 'سيارات', logo: 'car.svg' },
      { id: 4, title: 'خدمات مزلية', logo: 'home-repair.svg' },
      { id: 5, title: 'النظافة', logo: 'sweeping.svg' },
      { id: 6, title: 'CCTV', logo: 'cctv.svg' },
    ]
  }

  appoinment() {
    // console.log(event.details.value)
    switch (this.appoinmentbutton) {
      case 'new':
        // alert('new')
        break;

      case 'old':
        // alert('old');
        // default:
        //   alert('error');
        break;
    }
  }

  // ngAfterViewInit() {
  // }



  public pushAppoinment(id) {
    this.navController.navigateForward('/appoinment-details/' + id);

    this.dataShareService.setData(this.data);

  }


  appoinmentClick() {
    this.animateAppoinment = 'animate__pulse';
  }
}
