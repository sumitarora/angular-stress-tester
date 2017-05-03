import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp310Component } from './comp-310.component';
import { Service310Service } from '../../services/service-310.service';

describe('Comp310Component', () => {
  let component: Comp310Component;
  let fixture: ComponentFixture<Comp310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp310Component ],
providers: [Service310Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
