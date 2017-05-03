import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp87Component } from './comp-87.component';
import { Service87Service } from '../../services/service-87.service';

describe('Comp87Component', () => {
  let component: Comp87Component;
  let fixture: ComponentFixture<Comp87Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp87Component ],
providers: [Service87Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
