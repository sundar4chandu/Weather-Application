import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let locationService: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationService]
    });
    locationService = TestBed.get(LocationService);
  });

  it('should be created', () => {
    expect(locationService).toBeTruthy();
  });

  it('getCurrentPosition should return a promise', () => {
    const location = {};
    spyOn(locationService, 'getCurrentPosition').and.returnValue(Promise.resolve(location));
    locationService.getCurrentPosition().then(res => {
      expect(res).toEqual(location);
    });
  });
});
