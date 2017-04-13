import { TestBed, inject } from '@angular/core/testing';

import { Service695Service } from './service-695.service';

describe('Service695Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service695Service]
    });
  });

  it('should ...', inject([Service695Service], (service: Service695Service) => {
    expect(service).toBeTruthy();
  }));
});
