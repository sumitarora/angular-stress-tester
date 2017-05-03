import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp307Component } from './comp-307.component';
import { Service307Service } from '../../services/service-307.service';

describe('Comp307Component', () => {
  let component: Comp307Component;
  let fixture: ComponentFixture<Comp307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp307Component ],
providers: [Service307Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
