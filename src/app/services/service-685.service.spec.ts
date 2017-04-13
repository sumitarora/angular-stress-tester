import { TestBed, inject } from '@angular/core/testing';

import { Service685Service } from './service-685.service';

describe('Service685Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service685Service]
    });
  });

  it('should ...', inject([Service685Service], (service: Service685Service) => {
    expect(service).toBeTruthy();
  }));
});
