import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { RestService } from 'src/app/services/rest/rest.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  public weatherForecast;
  public errorMsg;
  public forecast = [];
  public iconUrl = 'http://openweathermap.org/img/w/';
  public iconFormat = '.png';
  public selectedWeather;
  public tableView = true;

  constructor(private locationService: LocationService,
              private restService: RestService,
              private dateFilter: DatePipe
            ) {
  }

  ngOnInit() { 
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.locationService.getCurrentPosition().then(location => {
      this.restService.getweatherForecast(location.lat, location.lng).subscribe((res: any) => {
        this.weatherForecast = res;
        this.setTableData(res.list);
      });
    }).catch(err => {
      const alertMsg = 'Please allow location access.';
      window.alert(alertMsg);
      this.errorMsg = 'User location is currently unavailable. Please turn on location services.'
    });
  }

  setTableData(data) {
    let dates = [];
    data.forEach(element => {
      const date = this.dateFilter.transform(element.dt * 1000, 'MMM d');
      if(dates.indexOf(date) !== -1){
        this.forecast[dates.indexOf(date)].push(element);
      } else {
        dates.push(date);
        this.forecast[dates.indexOf(date)] = [];
        this.forecast[dates.indexOf(date)].push(element);
      }
    });
    for (let i = 0; i < this.forecast[this.forecast.length - 1].length; i++) {
      this.forecast[0].unshift('');
    }
  }

  selectWeather(item){
    this.selectedWeather = item;
  }

  toggleView(){
    this.tableView = !this.tableView;
  }

}
