import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp567Component } from './comp-567.component';
import { Service567Service } from '../../services/service-567.service';

describe('Comp567Component', () => {
  let component: Comp567Component;
  let fixture: ComponentFixture<Comp567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp567Component ],
providers: [Service567Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
