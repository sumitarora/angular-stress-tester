import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp773Component } from './comp-773.component';
import { Service773Service } from '../../services/service-773.service';

describe('Comp773Component', () => {
  let component: Comp773Component;
  let fixture: ComponentFixture<Comp773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp773Component ],
providers: [Service773Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
