import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp598Component } from './comp-598.component';
import { Service598Service } from '../../services/service-598.service';

describe('Comp598Component', () => {
  let component: Comp598Component;
  let fixture: ComponentFixture<Comp598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp598Component ],
providers: [Service598Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
