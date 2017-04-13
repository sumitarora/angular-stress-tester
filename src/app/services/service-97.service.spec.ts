import { TestBed, inject } from '@angular/core/testing';

import { Service97Service } from './service-97.service';

describe('Service97Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service97Service]
    });
  });

  it('should ...', inject([Service97Service], (service: Service97Service) => {
    expect(service).toBeTruthy();
  }));
});
