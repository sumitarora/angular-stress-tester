import { TestBed, inject } from '@angular/core/testing';

import { Service560Service } from './service-560.service';

describe('Service560Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service560Service]
    });
  });

  it('should ...', inject([Service560Service], (service: Service560Service) => {
    expect(service).toBeTruthy();
  }));
});
