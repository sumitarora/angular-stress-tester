import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp778Component } from './comp-778.component';
import { Service778Service } from '../../services/service-778.service';

describe('Comp778Component', () => {
  let component: Comp778Component;
  let fixture: ComponentFixture<Comp778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp778Component ],
providers: [Service778Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
