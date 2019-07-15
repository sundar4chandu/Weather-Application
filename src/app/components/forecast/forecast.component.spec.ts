import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { RestService } from 'src/app/services/rest/rest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let weatherForecast = {
    city: {
      id: 1851632, name: "Shuzenji",
      coord: { "lon": 138.933334, "lat": 34.966671 },
      country: "JP",
      timezone: 32400,
      cod: "200",
      message: 0.0045,
      cnt: 38,
      list: [{
        "dt": 1406106000,
        "main": {
          "temp": 298.77,
          "temp_min": 298.77,
          "temp_max": 298.774,
          "pressure": 1005.93,
          "sea_level": 1018.18,
          "grnd_level": 1005.93,
          "humidity": 87,
          "temp_kf": 0.26
        },
        "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }],
        "clouds": { "all": 88 },
        "wind": { "speed": 5.71, "deg": 229.501 },
        "sys": { "pod": "d" },
        "dt_txt": "2014-07-23 09:00:00"
      }
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ForecastComponent],
      providers: [RestService, HttpTestingController, DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have back button', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button').textContent).toContain('Back');
  })

  it('should call getWeatherForecast', () => {
    spyOn(component, 'getWeatherForecast').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.getWeatherForecast).toHaveBeenCalled();
  });

  it('should have the forecast table', () => {
    component.weatherForecast = weatherForecast;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(compiled.querySelector('table')).toBeDefined();
  });
});
