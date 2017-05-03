import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp776Component } from './comp-776.component';
import { Service776Service } from '../../services/service-776.service';

describe('Comp776Component', () => {
  let component: Comp776Component;
  let fixture: ComponentFixture<Comp776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp776Component ],
providers: [Service776Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
