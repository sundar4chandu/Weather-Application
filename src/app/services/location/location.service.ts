import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(res => {
        console.log(res)
        resolve({ lng: res.coords.longitude, lat: res.coords.latitude });
      },err => {
        reject(err);
      });
    });
  }
}
