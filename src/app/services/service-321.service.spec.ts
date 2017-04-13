import { TestBed, inject } from '@angular/core/testing';

import { Service321Service } from './service-321.service';

describe('Service321Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service321Service]
    });
  });

  it('should ...', inject([Service321Service], (service: Service321Service) => {
    expect(service).toBeTruthy();
  }));
});
