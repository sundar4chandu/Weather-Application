import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiKey = '485aadc24a72037f4b275f596b02d236';
  private currentTempUrl = 'http://api.openweathermap.org/data/2.5/weather?';
  private forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?';

  private units = 'imperial';

  constructor(private http: HttpClient) { }

  getCurrentTemp(lat, lon) {
    let params = 'units=' + this.units +
      '&lat=' + lat +
      '&lon=' + lon +
      '&APPID=' + this.apiKey;
    return this.http.get(this.currentTempUrl + params);
  }

  getweatherForecast(lat, lon) {
    let params = 'units=' + this.units +
      '&lat=' + lat +
      '&lon=' + lon +
      '&APPID=' + this.apiKey;
    return this.http.get(this.forecastUrl + params);
  }
}
