import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp961Component } from './comp-961.component';
import { Service961Service } from '../../services/service-961.service';

describe('Comp961Component', () => {
  let component: Comp961Component;
  let fixture: ComponentFixture<Comp961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp961Component ],
providers: [Service961Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
