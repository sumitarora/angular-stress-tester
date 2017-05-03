import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp832Component } from './comp-832.component';
import { Service832Service } from '../../services/service-832.service';

describe('Comp832Component', () => {
  let component: Comp832Component;
  let fixture: ComponentFixture<Comp832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp832Component ],
providers: [Service832Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
