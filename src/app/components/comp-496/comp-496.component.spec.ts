import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp496Component } from './comp-496.component';
import { Service496Service } from '../../services/service-496.service';

describe('Comp496Component', () => {
  let component: Comp496Component;
  let fixture: ComponentFixture<Comp496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp496Component ],
providers: [Service496Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
