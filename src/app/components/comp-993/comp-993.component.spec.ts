import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp993Component } from './comp-993.component';
import { Service993Service } from '../../services/service-993.service';

describe('Comp993Component', () => {
  let component: Comp993Component;
  let fixture: ComponentFixture<Comp993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp993Component ],
providers: [Service993Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
