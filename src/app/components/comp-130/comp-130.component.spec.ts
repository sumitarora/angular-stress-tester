import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp130Component } from './comp-130.component';
import { Service130Service } from '../../services/service-130.service';

describe('Comp130Component', () => {
  let component: Comp130Component;
  let fixture: ComponentFixture<Comp130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp130Component ],
providers: [Service130Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
