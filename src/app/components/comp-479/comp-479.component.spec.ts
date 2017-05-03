import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp479Component } from './comp-479.component';
import { Service479Service } from '../../services/service-479.service';

describe('Comp479Component', () => {
  let component: Comp479Component;
  let fixture: ComponentFixture<Comp479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp479Component ],
providers: [Service479Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
