import { TestBed, inject } from '@angular/core/testing';

import { Service938Service } from './service-938.service';

describe('Service938Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service938Service]
    });
  });

  it('should ...', inject([Service938Service], (service: Service938Service) => {
    expect(service).toBeTruthy();
  }));
});
