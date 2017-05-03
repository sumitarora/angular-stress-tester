import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp654Component } from './comp-654.component';
import { Service654Service } from '../../services/service-654.service';

describe('Comp654Component', () => {
  let component: Comp654Component;
  let fixture: ComponentFixture<Comp654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp654Component ],
providers: [Service654Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
