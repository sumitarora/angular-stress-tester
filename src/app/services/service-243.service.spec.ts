import { TestBed, inject } from '@angular/core/testing';

import { Service243Service } from './service-243.service';

describe('Service243Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service243Service]
    });
  });

  it('should ...', inject([Service243Service], (service: Service243Service) => {
    expect(service).toBeTruthy();
  }));
});
