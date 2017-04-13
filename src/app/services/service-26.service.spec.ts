import { TestBed, inject } from '@angular/core/testing';

import { Service26Service } from './service-26.service';

describe('Service26Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service26Service]
    });
  });

  it('should ...', inject([Service26Service], (service: Service26Service) => {
    expect(service).toBeTruthy();
  }));
});
