import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp648Component } from './comp-648.component';
import { Service648Service } from '../../services/service-648.service';

describe('Comp648Component', () => {
  let component: Comp648Component;
  let fixture: ComponentFixture<Comp648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp648Component ],
providers: [Service648Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
