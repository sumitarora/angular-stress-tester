import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp523Component } from './comp-523.component';
import { Service523Service } from '../../services/service-523.service';

describe('Comp523Component', () => {
  let component: Comp523Component;
  let fixture: ComponentFixture<Comp523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp523Component ],
providers: [Service523Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
