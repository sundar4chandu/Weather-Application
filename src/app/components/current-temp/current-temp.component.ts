import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-current-temp',
  templateUrl: './current-temp.component.html',
  styleUrls: ['./current-temp.component.css']
})
export class CurrentTempComponent implements OnInit {

  public location;
  public weather;
  public imgSrc;
  public wind = {
    units : 'm'
  }
  public errorMsg = '';
  constructor(private restService: RestService,
    private locationService: LocationService
    ) {
      
     }

  ngOnInit() { this.getCurrentTemp(); }

  getCurrentTemp() {
    this.locationService.getCurrentPosition().then(location => {
      this.restService.getCurrentTemp(location.lat, location.lng).subscribe((res: any) => {
        this.weather = res;
        this.weather.icon = 'http://openweathermap.org/img/w/' + res.weather[0].icon + '.png';
      });
    }).catch(err => {
      const alertMsg = 'Please allow location access.';
      window.alert(alertMsg);
      this.errorMsg = 'User location is currently unavailable. Please turn on location services.'
    });
  }

}
