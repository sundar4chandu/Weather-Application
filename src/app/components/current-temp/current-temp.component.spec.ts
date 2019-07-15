import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Location} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { CurrentTempComponent } from './current-temp.component';

describe('CurrentTempComponent', () => {
  let component: CurrentTempComponent;
  let fixture: ComponentFixture<CurrentTempComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTempComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get temperature function', () => {
    const fixture = TestBed.createComponent(CurrentTempComponent);
    component = fixture.componentInstance;

    expect(component.getCurrentTemp).toHaveBeenCalled();
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CurrentTempComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to weather-app!');
  });
});
