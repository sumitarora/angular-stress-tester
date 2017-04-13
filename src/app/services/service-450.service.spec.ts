import { TestBed, inject } from '@angular/core/testing';

import { Service450Service } from './service-450.service';

describe('Service450Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service450Service]
    });
  });

  it('should ...', inject([Service450Service], (service: Service450Service) => {
    expect(service).toBeTruthy();
  }));
});
