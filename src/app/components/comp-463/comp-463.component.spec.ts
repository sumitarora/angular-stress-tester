import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp463Component } from './comp-463.component';
import { Service463Service } from '../../services/service-463.service';

describe('Comp463Component', () => {
  let component: Comp463Component;
  let fixture: ComponentFixture<Comp463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp463Component ],
providers: [Service463Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
