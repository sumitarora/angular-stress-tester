import { TestBed, inject } from '@angular/core/testing';

import { Service966Service } from './service-966.service';

describe('Service966Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service966Service]
    });
  });

  it('should ...', inject([Service966Service], (service: Service966Service) => {
    expect(service).toBeTruthy();
  }));
});
