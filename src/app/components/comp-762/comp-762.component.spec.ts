import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp762Component } from './comp-762.component';
import { Service762Service } from '../../services/service-762.service';

describe('Comp762Component', () => {
  let component: Comp762Component;
  let fixture: ComponentFixture<Comp762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp762Component ],
providers: [Service762Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
