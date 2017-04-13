import { TestBed, inject } from '@angular/core/testing';

import { Service783Service } from './service-783.service';

describe('Service783Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service783Service]
    });
  });

  it('should ...', inject([Service783Service], (service: Service783Service) => {
    expect(service).toBeTruthy();
  }));
});
