import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp950Component } from './comp-950.component';
import { Service950Service } from '../../services/service-950.service';

describe('Comp950Component', () => {
  let component: Comp950Component;
  let fixture: ComponentFixture<Comp950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp950Component ],
providers: [Service950Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
