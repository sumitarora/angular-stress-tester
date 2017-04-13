import { TestBed, inject } from '@angular/core/testing';

import { Service758Service } from './service-758.service';

describe('Service758Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service758Service]
    });
  });

  it('should ...', inject([Service758Service], (service: Service758Service) => {
    expect(service).toBeTruthy();
  }));
});
