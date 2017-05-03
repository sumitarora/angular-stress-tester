import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp64Component } from './comp-64.component';
import { Service64Service } from '../../services/service-64.service';

describe('Comp64Component', () => {
  let component: Comp64Component;
  let fixture: ComponentFixture<Comp64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp64Component ],
providers: [Service64Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
