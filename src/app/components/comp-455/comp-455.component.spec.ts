import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp455Component } from './comp-455.component';
import { Service455Service } from '../../services/service-455.service';

describe('Comp455Component', () => {
  let component: Comp455Component;
  let fixture: ComponentFixture<Comp455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp455Component ],
providers: [Service455Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
