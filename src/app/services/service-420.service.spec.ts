import { TestBed, inject } from '@angular/core/testing';

import { Service420Service } from './service-420.service';

describe('Service420Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service420Service]
    });
  });

  it('should ...', inject([Service420Service], (service: Service420Service) => {
    expect(service).toBeTruthy();
  }));
});
