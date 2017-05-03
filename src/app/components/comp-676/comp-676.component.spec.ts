import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp676Component } from './comp-676.component';
import { Service676Service } from '../../services/service-676.service';

describe('Comp676Component', () => {
  let component: Comp676Component;
  let fixture: ComponentFixture<Comp676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp676Component ],
providers: [Service676Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
