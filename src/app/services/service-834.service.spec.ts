import { TestBed, inject } from '@angular/core/testing';

import { Service834Service } from './service-834.service';

describe('Service834Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service834Service]
    });
  });

  it('should ...', inject([Service834Service], (service: Service834Service) => {
    expect(service).toBeTruthy();
  }));
});
