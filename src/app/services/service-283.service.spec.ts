import { TestBed, inject } from '@angular/core/testing';

import { Service283Service } from './service-283.service';

describe('Service283Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service283Service]
    });
  });

  it('should ...', inject([Service283Service], (service: Service283Service) => {
    expect(service).toBeTruthy();
  }));
});
