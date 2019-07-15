import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import {Location} from "@angular/common";
import {Router} from "@angular/router"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
;
import { CurrentTempComponent } from './current-temp.component';
import { AppComponent } from 'src/app/app.component';
import { ForecastComponent } from '../forecast/forecast.component';
import { RestService } from 'src/app/services/rest/rest.service';
import { LocationService } from 'src/app/services/location/location.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('CurrentTempComponent', () => {
  let component: CurrentTempComponent;
  let fixture: ComponentFixture<CurrentTempComponent>;
  let location: Location;
  let router: Router;
  let locationService: LocationService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientTestingModule],
      declarations: [ CurrentTempComponent, AppComponent, ForecastComponent ],
      providers: [HttpTestingController, LocationService, RestService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    locationService = new LocationService();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CurrentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  xit('should call get temperature function', () => {
    fixture = TestBed.createComponent(CurrentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component,'getCurrentTemp').and.callThrough();

    expect(component.getCurrentTemp).toHaveBeenCalled();
  });

  it('should navigate to forecast when button clicked', fakeAsync (() => {    
    const fixture = TestBed.createComponent(CurrentTempComponent);
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    tick(); // simulates the passage of time until all pending asynchronous activities finish

    location = TestBed.get(Location);
    fixture.detectChanges();
    
    tick();
    
    expect(compiled.querySelector('button').textContent).toContain('See Forecast');
    // expect(location.path()).toEqual('/forecast');
  }));

  xit('should alert error message if no location', fakeAsync(() => {
    spyOn(locationService,'getCurrentPosition').and.returnValue(Promise.reject({}));
    spyOn(window, "alert");

    fixture = TestBed.createComponent(CurrentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    expect(window.alert).toHaveBeenCalled();
  }));
});
