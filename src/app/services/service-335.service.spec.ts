import { TestBed, inject } from '@angular/core/testing';

import { Service335Service } from './service-335.service';

describe('Service335Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service335Service]
    });
  });

  it('should ...', inject([Service335Service], (service: Service335Service) => {
    expect(service).toBeTruthy();
  }));
});
