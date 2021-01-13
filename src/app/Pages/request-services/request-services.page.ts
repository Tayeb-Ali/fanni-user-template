// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google;
const { Geolocation } = Plugins;

@Component({
  selector: 'app-request-services',
  templateUrl: './request-services.page.html',
  styleUrls: ['./request-services.page.scss'],
})
export class RequestServicesPage implements OnInit {
  data: any;
  coords: any = { latitude: 15.313, longitude: 4.35321 };
  public map;
  public geocoder;
  appoinment: any;
  marker;
  @ViewChild('mapElement', { static: false }) mapElement;
  public formattedAddress;
  constructor(private dataShareService: DataShareService,
    private nativeGeocoder: NativeGeocoder,
    public platform: Platform) {
    this.appoinment = { address: null, lat: null, lng: null, date: null, proplem:null };
  }

  ngOnInit() {
    // this.dataShareService.serviceData.subscribe(receiveddata => {
    //   console.log('res: ', receiveddata);
    // });
    this.getCurrentPosition();
  }
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('First: Current', coordinates);
    this.coords = coordinates.coords;
  }

  async ngAfterViewInit() {
    const myLatlng = await this.getCurrentPosition();
    await this.getMap();
  }

  async getMap() {
    console.log('call map');

    const myLatlng = await new google.maps.LatLng(parseFloat(this.coords.latitude), parseFloat(this.coords.longitude));
    this.geocoder = await new google.maps.Geocoder();
    const mapOptions = {
      zoom: 4,
      center: myLatlng
    };
    this.map = await new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.marker = await new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      draggable: true,
      title: 'Drag me!'
    });
    google.maps.event.addListener(this.marker, 'dragend', async () => {
      console.log('lat: ', this.map.center.lat())
      // this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      await this.geocodePosition(this.marker.getPosition());
    });
  }


  async geocodePosition(pos) {
    this.geocoder.geocode({
      latLng: pos
    }, async (responses) => {
      if (responses && responses.length > 0) {
        this.formattedAddress = await responses[0].formatted_address;
        this.appoinment.address = await responses[0].formatted_address;
      } else {
      }
    });
  }

  // getAddressFromCoords(lattitude, longitude) {
  //   console.log("getAddressFromCoords " + lattitude + " " + longitude);
  //   let options: NativeGeocoderOptions = {
  //     useLocale: true,
  //     maxResults: 5
  //   };

  //   this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
  //     .then((result: NativeGeocoderResult[]) => {
  //       this.formattedAddress = "";
  //       let responseAddress = [];
  //       for (let [key, value] of Object.entries(result[0])) {
  //         if (value.length > 0)
  //           responseAddress.push(value);

  //       }
  //       responseAddress.reverse();
  //       for (let value of responseAddress) {
  //         this.formattedAddress += value + ", ";
  //       }
  //       this.formattedAddress = this.formattedAddress.slice(0, -2);
  //     })
  //     .catch((error: any) => {
  //       this.formattedAddress = "Address Not Available!";
  //     });

  // }


}
