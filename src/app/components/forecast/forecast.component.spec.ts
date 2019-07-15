import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { RestService } from 'src/app/services/rest/rest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ForecastComponent ],
      providers: [ RestService, HttpTestingController, DatePipe  ]
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

  xit('should call getWeatherForecast', () => {
    spyOn(component, 'getWeatherForecast').and.callThrough();
    tick();
    fixture.detectChanges();

    expect(component.getWeatherForecast).toHaveBeenCalled();
  });
});
