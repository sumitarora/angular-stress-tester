import { TestBed, inject } from '@angular/core/testing';

import { Service515Service } from './service-515.service';

describe('Service515Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service515Service]
    });
  });

  it('should ...', inject([Service515Service], (service: Service515Service) => {
    expect(service).toBeTruthy();
  }));
});
