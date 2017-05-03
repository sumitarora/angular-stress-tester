import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp471Component } from './comp-471.component';
import { Service471Service } from '../../services/service-471.service';

describe('Comp471Component', () => {
  let component: Comp471Component;
  let fixture: ComponentFixture<Comp471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp471Component ],
providers: [Service471Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
