import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

describe('RestService', () => {
  let service: RestService;
  let http: HttpClient;

  beforeEach(() => {service = new RestService(http)});

  it('should be created', () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    let lat = '';
    let lng = '';
    
    expect(service.getCurrentTemp(lat,lng)) ;
  });

});
