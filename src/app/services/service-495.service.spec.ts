import { TestBed, inject } from '@angular/core/testing';

import { Service495Service } from './service-495.service';

describe('Service495Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service495Service]
    });
  });

  it('should ...', inject([Service495Service], (service: Service495Service) => {
    expect(service).toBeTruthy();
  }));
});
