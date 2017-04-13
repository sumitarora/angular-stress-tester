import { TestBed, inject } from '@angular/core/testing';

import { Service692Service } from './service-692.service';

describe('Service692Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service692Service]
    });
  });

  it('should ...', inject([Service692Service], (service: Service692Service) => {
    expect(service).toBeTruthy();
  }));
});
