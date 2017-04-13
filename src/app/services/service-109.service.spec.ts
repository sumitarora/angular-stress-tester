import { TestBed, inject } from '@angular/core/testing';

import { Service109Service } from './service-109.service';

describe('Service109Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service109Service]
    });
  });

  it('should ...', inject([Service109Service], (service: Service109Service) => {
    expect(service).toBeTruthy();
  }));
});
