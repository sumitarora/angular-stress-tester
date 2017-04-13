import { TestBed, inject } from '@angular/core/testing';

import { Service483Service } from './service-483.service';

describe('Service483Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service483Service]
    });
  });

  it('should ...', inject([Service483Service], (service: Service483Service) => {
    expect(service).toBeTruthy();
  }));
});
