import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp110Component } from './comp-110.component';
import { Service110Service } from '../../services/service-110.service';

describe('Comp110Component', () => {
  let component: Comp110Component;
  let fixture: ComponentFixture<Comp110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp110Component ],
providers: [Service110Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
