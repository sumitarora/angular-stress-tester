import { TestBed, inject } from '@angular/core/testing';

import { Service15Service } from './service-15.service';

describe('Service15Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service15Service]
    });
  });

  it('should ...', inject([Service15Service], (service: Service15Service) => {
    expect(service).toBeTruthy();
  }));
});
