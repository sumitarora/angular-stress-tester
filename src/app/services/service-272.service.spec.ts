import { TestBed, inject } from '@angular/core/testing';

import { Service272Service } from './service-272.service';

describe('Service272Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service272Service]
    });
  });

  it('should ...', inject([Service272Service], (service: Service272Service) => {
    expect(service).toBeTruthy();
  }));
});
