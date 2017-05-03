import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp834Component } from './comp-834.component';
import { Service834Service } from '../../services/service-834.service';

describe('Comp834Component', () => {
  let component: Comp834Component;
  let fixture: ComponentFixture<Comp834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp834Component ],
providers: [Service834Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
