import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp520Component } from './comp-520.component';
import { Service520Service } from '../../services/service-520.service';

describe('Comp520Component', () => {
  let component: Comp520Component;
  let fixture: ComponentFixture<Comp520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp520Component ],
providers: [Service520Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
