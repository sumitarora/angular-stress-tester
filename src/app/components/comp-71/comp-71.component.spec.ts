import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp71Component } from './comp-71.component';
import { Service71Service } from '../../services/service-71.service';

describe('Comp71Component', () => {
  let component: Comp71Component;
  let fixture: ComponentFixture<Comp71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp71Component ],
providers: [Service71Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
