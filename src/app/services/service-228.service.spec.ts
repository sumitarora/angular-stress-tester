import { TestBed, inject } from '@angular/core/testing';

import { Service228Service } from './service-228.service';

describe('Service228Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service228Service]
    });
  });

  it('should ...', inject([Service228Service], (service: Service228Service) => {
    expect(service).toBeTruthy();
  }));
});
