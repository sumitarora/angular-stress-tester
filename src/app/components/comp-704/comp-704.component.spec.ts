import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp704Component } from './comp-704.component';
import { Service704Service } from '../../services/service-704.service';

describe('Comp704Component', () => {
  let component: Comp704Component;
  let fixture: ComponentFixture<Comp704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp704Component ],
providers: [Service704Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
