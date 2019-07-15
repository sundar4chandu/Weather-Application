import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestService } from './rest.service';
import { of } from 'rxjs';

describe('RestService', () => {
  let restService: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestService]
    });
    restService = TestBed.get(RestService);

  });

  it('should be created', () => {
    expect(restService).toBeTruthy();
  });

  it('get current temperature should return observable', () => {
    const weather = [{}];

    spyOn(restService, 'getCurrentTemp').and.returnValue(of(weather));

    let response;
    restService.getCurrentTemp(43.2342, -81.1231).subscribe(res => {
      response = res;
    });
    expect(response).toEqual(weather);
  });

  it('get weather forecast should return array', () => {
    const forecast = [];
    forecast.length = 40;

    spyOn(restService, 'getweatherForecast').and.returnValue(of(forecast));

    let response;
    restService.getweatherForecast(43.2342, -81.1231).subscribe(res => {
      response = res;
    });
    expect(response.length).toEqual(forecast.length);
  });
});
