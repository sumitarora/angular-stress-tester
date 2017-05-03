import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp255Component } from './comp-255.component';
import { Service255Service } from '../../services/service-255.service';

describe('Comp255Component', () => {
  let component: Comp255Component;
  let fixture: ComponentFixture<Comp255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp255Component ],
providers: [Service255Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
