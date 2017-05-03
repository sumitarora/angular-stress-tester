import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp267Component } from './comp-267.component';
import { Service267Service } from '../../services/service-267.service';

describe('Comp267Component', () => {
  let component: Comp267Component;
  let fixture: ComponentFixture<Comp267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp267Component ],
providers: [Service267Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
