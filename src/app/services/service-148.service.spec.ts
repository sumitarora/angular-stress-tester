import { TestBed, inject } from '@angular/core/testing';

import { Service148Service } from './service-148.service';

describe('Service148Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service148Service]
    });
  });

  it('should ...', inject([Service148Service], (service: Service148Service) => {
    expect(service).toBeTruthy();
  }));
});
