import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp27Component } from './comp-27.component';
import { Service27Service } from '../../services/service-27.service';

describe('Comp27Component', () => {
  let component: Comp27Component;
  let fixture: ComponentFixture<Comp27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp27Component ],
providers: [Service27Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
