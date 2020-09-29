import {  } from '@angular/google-maps';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number
  longitude: number
  zoom: number
  cords: string;
  url: string

  // public searchControl: FormControl;

  // @ViewChild("search")
  // public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
            private ngZone: NgZone,
            private router: Router) {}

  ngOnInit(): void {
  this.latitude = 19.551221;
  this.longitude = -96.935521
  this.zoom = 13;
  this.url = "";

  // this.searchControl = new FormControl();
  // this.setCurrentPosition();


  // this.mapsAPILoader.load().then(() => {
  //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //     types: ["address"]
  //   });
  //   autocomplete.addListener("place_changed", () => {
  //     this.ngZone.run(() => {
  //       //get the place result
  //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //       //verify result
  //       if (place.geometry === undefined || place.geometry === null) {
  //         return;
  //       }

  //       //set latitude, longitude and zoom
  //       this.latitude = place.geometry.location.lat();
  //       this.longitude = place.geometry.location.lng();
  //       this.zoom = 12;
  //     });
  //   });
  // });
  }


  // private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }



  click(event){
    console.log(event)
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    console.log(this.latitude, this.longitude)
    this.cords = this.latitude +","+this.longitude
    this.url = 'https://maps.google.com/?q='+this.cords
    console.log(this.url)
    console.log('https://www.google.com/maps/place/?q=place_id:'+event.placeId)
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  Go(){
    window.open(this.url)
  }
  

}
