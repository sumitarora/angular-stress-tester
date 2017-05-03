import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp696Component } from './comp-696.component';
import { Service696Service } from '../../services/service-696.service';

describe('Comp696Component', () => {
  let component: Comp696Component;
  let fixture: ComponentFixture<Comp696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp696Component ],
providers: [Service696Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
