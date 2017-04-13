import { TestBed, inject } from '@angular/core/testing';

import { Service195Service } from './service-195.service';

describe('Service195Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service195Service]
    });
  });

  it('should ...', inject([Service195Service], (service: Service195Service) => {
    expect(service).toBeTruthy();
  }));
});
