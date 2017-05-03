import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp708Component } from './comp-708.component';
import { Service708Service } from '../../services/service-708.service';

describe('Comp708Component', () => {
  let component: Comp708Component;
  let fixture: ComponentFixture<Comp708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp708Component ],
providers: [Service708Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
