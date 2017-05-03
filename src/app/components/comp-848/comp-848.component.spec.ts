import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp848Component } from './comp-848.component';
import { Service848Service } from '../../services/service-848.service';

describe('Comp848Component', () => {
  let component: Comp848Component;
  let fixture: ComponentFixture<Comp848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp848Component ],
providers: [Service848Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
