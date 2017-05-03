import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp85Component } from './comp-85.component';
import { Service85Service } from '../../services/service-85.service';

describe('Comp85Component', () => {
  let component: Comp85Component;
  let fixture: ComponentFixture<Comp85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp85Component ],
providers: [Service85Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
