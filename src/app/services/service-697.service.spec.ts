import { TestBed, inject } from '@angular/core/testing';

import { Service697Service } from './service-697.service';

describe('Service697Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service697Service]
    });
  });

  it('should ...', inject([Service697Service], (service: Service697Service) => {
    expect(service).toBeTruthy();
  }));
});
