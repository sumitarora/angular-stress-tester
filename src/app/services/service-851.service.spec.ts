import { TestBed, inject } from '@angular/core/testing';

import { Service851Service } from './service-851.service';

describe('Service851Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service851Service]
    });
  });

  it('should ...', inject([Service851Service], (service: Service851Service) => {
    expect(service).toBeTruthy();
  }));
});
